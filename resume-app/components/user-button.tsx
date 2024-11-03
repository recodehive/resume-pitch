import { Button } from "../components/ui/button"
import { auth } from "auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { SignIn, SignOut } from "./auth-components"
import Link from "next/link"
import Image from "next/image"

export default async function UserButton() {
  const session = await auth();
  
  if (!session?.user) return <SignIn />

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full bg-background"
          >
            <Image
              src={session.user?.image ?? '/placeholder-user.jpg'}
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-background">
          {session.user ? (
            <>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none text-foreground">
                    {session.user.name}
                  </p>
                  <p className="text-muted-foreground text-xs leading-none">
                    {session.user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <SignOut />
            </>
          ) : (
            <DropdownMenuItem className="text-foreground">
              <Link href="/login">Sign In</Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
