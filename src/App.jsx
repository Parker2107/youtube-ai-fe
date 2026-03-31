import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center gap-6 flex-grow py-20 px-4 md:py-32 min-h-screen">
				<div className="relative w-48 h-48 flex items-center justify-center">
					<img src={heroImg} alt="Hero" className="w-32 h-32 relative z-0" />
					<img src={reactLogo} alt="React logo" className="absolute w-10 h-10 z-10 top-8 left-1/2 transform -translate-x-1/2 animate-pulse" />
					<img src={viteLogo} alt="Vite logo" className="absolute w-8 h-8 z-0 bottom-12 left-1/2 transform -translate-x-1/2 opacity-80" />
				</div>

				<div className="text-center">
					<h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Get started</h1>
					<p className="text-lg text-slate-300">
						Edit <code className="bg-slate-700 px-2 py-1 rounded text-blue-300">src/App.jsx</code> and save to test{" "}
						<code className="bg-slate-700 px-2 py-1 rounded text-blue-300">HMR</code>
					</p>
				</div>

				<button
					onClick={() => setCount((count) => count + 1)}
					className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
				>
					Count is {count}
				</button>
			</section>

			{/* Divider */}
			<div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

			{/* Features Section */}
			<section className="grid md:grid-cols-2 border-t border-slate-700">
				{/* Documentation */}
				<div className="p-8 md:p-12 border-r border-slate-700 md:border-r md:border-b-0 border-b md:border-b hover:bg-slate-700/50 transition-colors duration-300">
					<div className="mb-6 w-8 h-8 text-blue-400">
						<svg role="presentation" aria-hidden="true" className="w-full h-full">
							<use href="/icons.svg#documentation-icon"></use>
						</svg>
					</div>
					<h2 className="text-2xl font-bold mb-2 text-white">Documentation</h2>
					<p className="text-slate-400 mb-6">Your questions, answered</p>
					<div className="flex flex-col gap-3">
						<a
							href="https://vite.dev/"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-3 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200 text-slate-200"
						>
							<img src={viteLogo} alt="Vite" className="w-5 h-5" />
							Explore Vite
						</a>
						<a
							href="https://react.dev/"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-3 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200 text-slate-200"
						>
							<img src={reactLogo} alt="React" className="w-5 h-5" />
							Learn React
						</a>
					</div>
				</div>

				{/* Connect Section */}
				<div className="p-8 md:p-12 hover:bg-slate-700/50 transition-colors duration-300">
					<div className="mb-6 w-8 h-8 text-cyan-400">
						<svg role="presentation" aria-hidden="true" className="w-full h-full">
							<use href="/icons.svg#social-icon"></use>
						</svg>
					</div>
					<h2 className="text-2xl font-bold mb-2 text-white">Connect with us</h2>
					<p className="text-slate-400 mb-6">Join the community</p>
					<div className="grid grid-cols-2 gap-3">
						<a
							href="https://github.com/vitejs/vite"
							target="_blank"
							rel="noreferrer"
							className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200 text-sm font-medium text-slate-200"
						>
							<svg role="presentation" aria-hidden="true" className="w-4 h-4">
								<use href="/icons.svg#github-icon"></use>
							</svg>
							GitHub
						</a>
						<a
							href="https://chat.vite.dev/"
							target="_blank"
							rel="noreferrer"
							className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200 text-sm font-medium text-slate-200"
						>
							<svg role="presentation" aria-hidden="true" className="w-4 h-4">
								<use href="/icons.svg#discord-icon"></use>
							</svg>
							Discord
						</a>
						<a
							href="https://x.com/vite_js"
							target="_blank"
							rel="noreferrer"
							className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200 text-sm font-medium text-slate-200"
						>
							<svg role="presentation" aria-hidden="true" className="w-4 h-4">
								<use href="/icons.svg#x-icon"></use>
							</svg>
							X
						</a>
						<a
							href="https://bsky.app/profile/vite.dev"
							target="_blank"
							rel="noreferrer"
							className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200 text-sm font-medium text-slate-200"
						>
							<svg role="presentation" aria-hidden="true" className="w-4 h-4">
								<use href="/icons.svg#bluesky-icon"></use>
							</svg>
							Sky
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<div className="h-24 border-t border-slate-700 bg-slate-900/50"></div>
		</div>
	);
}

export default App;
