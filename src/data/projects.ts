
export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  backendGithubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    name: "BazarDor",
    category: "Full-Stack Web Application",
    description:
      "A modern online marketplace built to provide a convenient shopping experience, with user authentication, database integration, and a responsive interface.",
    image: "/pss/bazar-dor.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS",
      "DaisyUI",
    ],
    liveUrl: "https://bazar-dor-mocha-ten.vercel.app/",
    githubUrl: "https://github.com/jikrulislamjeto/Bazar-Dor",
    featured: true,
  },
  {
    slug: "fitlog",
    name: "FitLog",
    category: "Fitness & Workout Application",
    description:
      "A dark-themed workout library where users can explore exercises, view workout details, manage daily plans, save exercises, and track workout statistics.",
    image: "/pss/fitlog.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "REST API",
    ],
    liveUrl: "https://fit-log-drab-gamma.vercel.app/",
    githubUrl:
      "https://github.com/jikrulislamjeto/Assignment-6-FitLog",
    featured: true,
  },
  {
    slug: "devstack",
    name: "DevStack",
    category: "Developer Tools",
    description:
      "A React-based technology explorer that helps developers browse technologies, build a personalized development stack, and manage selected tools.",
    image: "/pss/devstack.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Icons",
      "Lucide React",
    ],
    liveUrl: "https://dev-stack-beige.vercel.app/",
    githubUrl: "https://github.com/jikrulislamjeto/DevStack",
    featured: true,
  },
];
