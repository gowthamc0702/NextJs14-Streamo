import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { Clapperboard, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";

import Link from "next/link";

export const Actions = async () => {

  return (
<div className="flex items-center justify-end gap-x-2">
  <Button size="sm"
  variant="ghost"
  className=" text-muted-foreground hover:text-primary"
  asChild  
>
    <Link href="/">
      <LogOut/>
      Exit
    </Link>
  </Button>
  <UserButton 
    afterSignOutUrl="/"
  />
</div>
  );
};

export default Actions;
