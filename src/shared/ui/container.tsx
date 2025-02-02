

export function Container({ children }: { children: React.ReactNode }) {
	return (
		<main className="w-full h-screen relative flex flex-col justify-center items-center px-20 2xl:px-40">
			{children}
		</main>
	);
}