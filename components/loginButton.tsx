import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  //   console.log("session :>> ", session);

  if (session) {
    return (
      <>
        {session.user?.name} <br />
        <button
          style={{
            borderRadius: "8px",
            background:
              "linear-gradient(102deg, #FFAA45 15.72%, #FF8A00 64.05%)",
            boxShadow: "0px 4px 0px 0px #B06D20",
          }}
          className="text-white w-64 h-12 "
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }

  return (
    <>
      <button
        style={{
          borderRadius: "8px",
          background: "linear-gradient(102deg, #FFAA45 15.72%, #FF8A00 64.05%)",
          boxShadow: "0px 4px 0px 0px #B06D20",
        }}
        className="text-white w-64 h-12 "
        onClick={() => signIn()}
      >
        Sign in with Twitter
      </button>
    </>
  );
}
