import { Button } from "@/shared/ui/button";
import { ModeToggle } from "@/shared/ui/dark-mode-toggle";
import { UserProfileDialog } from "@/shared/ui/user-profile-dialog";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-20">
        <nav className="flex items-center justify-center w-full h-full px-20 2xl:px-40">
          <ul className="flex items-center justify-center h-full text-black dark:text-white gap-x-4">
            <li>
              <Link
                to="/"
                className="text-2xl font-bold text-black dark:text-white"
              >
                <Button
                  className="relative p-0 rounded-full shadow-none w-9"
                  variant="ghost"
                >
                  <Home />
                </Button>
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
            <li>
              <UserProfileDialog />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
