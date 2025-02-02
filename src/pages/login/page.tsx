import LoginForm from "@/features/auth/ui/login-form";
import  { Suspense } from "react";

export function LoginPage() {
  return (
    <main className="w-full bg-white dark:bg-[#101214] h-screen relative flex flex-col justify-center items-center overflow-hidden">
      <Suspense>
				<LoginForm />
      </Suspense>
    </main>
  );
};
