import { Container } from "@/shared/ui/container";



export function HomePage () {

  return (
    <main className="w-full bg-white dark:bg-[#101214] h-screen relative flex flex-col justify-center items-center">
			<Container>
				<h1 className="text-5xl md:6xl lg:7xl xl:text-8xl 2xl:text-9xl text-neutral-950 dark:text-white">
					Hi, I'm <a href="https://t.me/verloren33" className="text-blue-500 transition-colors hover:text-blue-400">Danil Koval</a>
					<br/> Let's work together!
					</h1>
			</Container>
    </main>
  );
}
