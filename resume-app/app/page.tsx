// @ts-nocheck
import { auth } from "@/auth";
import Main from "./main";

export default async function Component() {
  const session = await auth();

  return (
    <>
      <Main session={session}/>
    </>
  );
}
