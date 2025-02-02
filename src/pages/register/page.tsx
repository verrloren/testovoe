import RegisterForm from "@/features/auth/ui/register-form";
import { Suspense } from "react";

export function RegisterPage() {
	return (
		<main className="w-full h-screen bg-white dark:bg-[#101214] relative flex flex-col justify-center items-center overflow-hidden">
			<Suspense>
				<RegisterForm />
			</Suspense>
		</main>
	);
};
