import "@/styles/globals.scss";
import { cn } from "@/utils/tw";
import type { AppProps } from "next/app";
import { Jost, Inter } from "next/font/google";

const jost = Jost({
	display: "swap",
	weight: ["400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

const inter = Inter({
	display: "swap",
	weight: ["400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html {
					--font-jost: ${jost.style.fontFamily};
					--font-inter: ${inter.style.fontFamily};
				}
			`}</style>
			<main className={cn(inter.className)}>
				<Component {...pageProps} />
			</main>
		</>
	);
}
