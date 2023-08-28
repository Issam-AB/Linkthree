export const data: Data[] = [
	{
		name: "Issam ABOULFADL",
		avatar: "/avatar.png",
		links: [
			{
				href: "https://portfolio-issam-ab.vercel.app/",
				title: "My Personal Site",
				image: "/issam.png",
			},
			{
				href: "my-resume.pdf",
				title: "My Resume",
				image: "/resume.png",
			},
			{
				href: "https://www.linkedin.com/in/issam-aboulfadl/",
				title: "Linkedin",
				image: "/linkdin.png",
			},
			{
				href: "https://github.com/Issam-AB",
				title: "Github",
				image: "/github.png",
			},
			{
				href: "https://twitter.com/Issam_afdl",
				title: "Twitter",
				image: "/twitter.png",
			},
			{
				href: "https://aboulfadl.hashnode.dev/",
				title: "Hashnode Blog",
				image: "/hashnod.png",
			},
			{
				href: "https://codepen.io/issam-ab",
				title: "CodePen",
				image: "/codepen.jpg",
			},
			{
				href: "https://www.instagram.com/aissam.afdl/",
				title: "Instagram",
				image: "/instagram.jpg",
			},
		], // Add links property with an array
		socials: [
			{ href: "https://twitter.com/Issam_afdl", title: "twitter" },
			{ href: "https://github.com/Issam-AB", title: "github" },
			{
				href: "https://open.spotify.com/user/316xbjd2ueqfdzbjgnzry2wbq3qu",
				title: "spotify",
			},
		], // Add socials property with an array
	},
];

interface Data {
	name: string;
	avatar: string;
	links: Link[];
	socials: Social[];
}

interface Link {
	href: string;
	title: string;
	image?: string;
}

interface Social {
	href: string;
	title: string;
}
