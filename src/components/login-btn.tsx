import { useSession, signIn, signOut } from "next-auth/react"

export default function Loginbtn() {/*
  const { data: session } = useSession()
  if (session) {
    return (
      <>

<a className="btn" href="../login">
            Log In
        </a>
      </>
    )
  }*/
  return (
    <>
    <a className="btn" href="../login">
        Log In
    </a>
    </>
  )
}