import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import pool from "../../../lib/db";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    TwitterProvider({
      clientId: process.env.TWITTER_KEY,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
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
};

export default NextAuth(authOptions);
