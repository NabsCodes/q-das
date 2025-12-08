import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Q-DAS Global",
    short_name: "Q-DAS Global",
    description:
      "Q-DAS Global provides innovative ICT solutions, software development, managed IT services, and infrastructure solutions for organizations across Nigeria and Africa. Empowering digital transformation since 2011.",
    start_url: "/",
    display: "standalone",
    background_color: "#ddefff",
    theme_color: "#006fd1",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
