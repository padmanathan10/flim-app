import { redirect } from "next/navigation";
import { SignIn } from "../component/sign-in";
import { auth } from "@/lib/auth";

export default async function Login() {
  const session = await auth();

  if (session) {
    return redirect("/");
  }
  return <SignIn />;
}
