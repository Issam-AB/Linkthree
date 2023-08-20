import Image from "next/image";
import { get } from "@vercel/edge-config";
// import { redirect } from "next/navigation";
import { data } from "../utils/data";

export const dynamic = "force-dynamic",
	runtime = "edge";

function TwitterIcon() {
	return (
		<svg
			width="30"
			height="24"
			viewBox="0 0 24 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#a)">
				<path
					d="M21.479 4.937c.015.209.015.418.015.628 0 6.424-4.917 13.832-13.906 13.832v-.004a13.89 13.89 0 0 1-7.491-2.18 9.847 9.847 0 0 0 7.233-2.015 4.89 4.89 0 0 1-4.566-3.375c.732.14 1.487.112 2.206-.084a4.868 4.868 0 0 1-3.92-4.764v-.062c.68.376 1.44.585 2.218.608a4.851 4.851 0 0 1-1.513-6.49 13.896 13.896 0 0 0 10.073 5.078 4.848 4.848 0 0 1 1.414-4.644 4.911 4.911 0 0 1 6.914.21A9.84 9.84 0 0 0 23.26.496a4.884 4.884 0 0 1-2.149 2.69 9.76 9.76 0 0 0 2.807-.766 9.898 9.898 0 0 1-2.439 2.518Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M0 0h24v19.636H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}

function GitHubIcon() {
	return (
		<svg
			width="30"
			height="30"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_9914_10)">
				<path
					d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="clip0_9914_10">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}

function SpotifyIcon() {
	return (
		<svg
			role="img"
			width="30"
			height="30"
			viewBox="0 0 24 24"
			fill="white"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Spotify</title>
			<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
		</svg>
	);
}

function LinkCard({
	href,
	title,
	image,
}: {
	href: string;
	title: string;
	image?: string;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
		>
			<div className="flex text-center w-full">
				<div className="w-10 h-10">
					{image && (
						<Image
							className="w-10 h-10 rounded-lg object-cover"
							alt={title}
							src={image}
							width={40}
							height={40}
						/>
					)}
				</div>
				<h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
					{title}
				</h2>
			</div>
		</a>
	);
}

// interface Data {
// 	name: string;
// 	avatar: string;
// 	links: Link[];
// 	socials: Social[];
// }

// interface Link {
// 	href: string;
// 	title: string;
// 	image?: string;
// }

// interface Social {
// 	href: string;
// 	title: string;
// }

export default async function HomePage() {
	// if (!data) {
	// 	// not working yet https://github.com/vercel/next.js/issues/44232
	// 	redirect("https://linktr.ee/selenagomez");
	// }

	return (
		<div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
			{data.map((item) => (
				<>
					<Image
						priority
						className="rounded-full"
						alt={item.name}
						src={item.avatar}
						width={96}
						height={96}
					/>
					<h1 className="font-bold mt-4 mb-8 text-xl text-white">{item.name}</h1>
					{item.links.map((link) => (
						<LinkCard key={link.href} {...link} />
					))}
					<div className="flex items-center gap-4 mt-8 text-white">
						{item.socials.map((social) => (
							<a
								className="hover:scale-150 transition-all"
								aria-label={`${social.title} link`}
								key={social.href}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{social.title.includes("twitter") ? (
									<TwitterIcon />
								) : social.title.includes("github") ? (
									<GitHubIcon />
								) : social.title.includes("spotify") ? (
									<SpotifyIcon />
								) : null}
							</a>
						))}
					</div>
				</>
			))}
		</div>
	);
}
