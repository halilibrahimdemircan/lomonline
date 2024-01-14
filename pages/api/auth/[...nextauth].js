import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import pool from "../../../lib/db";
const jwt = require("jsonwebtoken");
// import { Pool } from 'pg'
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export const authOptions = {
  // Configure one or more authentication providers
  //   adapter: PrismaAdapter(prisma),
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    CredentialsProvider({
      name: "E-mail",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        const res = await fetch(
          "https://gapiv3.nftinit.io/api/RegisterLogin/Login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          }
        );
        const user = await res.json();
        console.log("user :>> ", user.status.success);
        if (user.status.success) {
          return credentials.email;
          const token = user.data.userToken;
          const encryptedToken = token; // Gelen şifreli token
          const secretKey = process.env.NEXTAUTH_SECRET; // Şifreleme anahtarı
          try {
            const decodedToken = jwt.verify(encryptedToken, secretKey);
            console.log("Decoded Token:", decodedToken);
          } catch (error) {
            console.error("Token çözümleme hatası:", error.message);
          }
        }
        // const dbUser = await pool.query(
        //   "SELECT * FROM game_users WHERE email='testuni@gmail.com'"
        // );
        // console.log("dbUser :>> ", dbUser);

        // if (dbUser && dbUser.password === credentials.password) {
        //   const {
        //     password,
        //     user_id,
        //     created_at,
        //     updated_at,
        //     ...dbUserWithoutPassword
        //   } = dbUser;
        //   return dbUserWithoutPassword;
        // }

        return null;
      },
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_KEY,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    // EmailProvider({
    //   server: process.env.EMAIL_FROM,
    //   from: process.env.EMAIL_FROM,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("user", user);
      console.log("account :>> ", account);
      console.log("profile :>> ", profile);
      console.log("email :>> ", email);
      console.log("credentials :>> ", credentials);
      //   const { rows } = await pool.query("SELECT * FROM game_items_new");
      //   console.log("sign in içinde :>> ", rows);
      return true;
    },
    async redirect({ url, baseUrl }) {
      //   console.log("redirectt");
      return baseUrl;
    },
    async session({ session, user, token }) {
      //   console.log("callbackkk session :>> ", session);
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      //   console.log("tokenn");
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
