"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Button } from "./button";
import { User } from "lucide-react";
import { AuthService } from "@/features/auth/services/auth.service";
import { useNavigate } from "react-router-dom";
import { DialogDescription } from "@radix-ui/react-dialog";
import toast from "react-hot-toast";
import { useUser } from "@/features/auth/hooks/use-user";
// import { useUserQuery } from "@/features/auth/hooks/use-user-query";

export function UserProfileDialog() {
  const navigate = useNavigate();
  const user = useUser();
	
	//to get user from react-query
	// const { user } = useUserQuery();
  return (
    <Dialog>
      <DialogTrigger className="px-2 py-2 rounded-full shadow-none hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
        <User size={18} />
      </DialogTrigger>

      <DialogContent className="bg-white dark:bg-[#0A0A0D]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-black dark:text-white">
            Profile
          </DialogTitle>
          <DialogDescription>
            {" "}
            <div className="mt-4 space-y-2">
              <p className="text-black dark:text-white">ID: {user?.id}</p>
              <p className="text-black dark:text-white">Email: {user?.email}</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={async () => {
              const result = await AuthService.logout();
              if (result) {
								
                toast.success("Logged out successfully");
                navigate("/login");
              }
            }}
            className="w-full rounded-xl"
            variant="destructive"
          >
            Exit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
