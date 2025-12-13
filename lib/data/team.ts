/**
 * @deprecated This static data has been migrated to Sanity CMS.
 * This file is kept for reference only.
 * See: /sanity/schemas/teamMember.ts for the schema
 * See: /lib/sanity/fetch.ts for the getTeamMembers() function
 */

import type { PortableTextBlock } from "@portabletext/types";

export type SocialPlatform =
  | "linkedin"
  | "x"
  | "instagram"
  | "facebook"
  | "email"
  | "website";

type SocialLink = {
  platform: SocialPlatform;
  url: string;
};

export type TeamMember = {
  name: string;
  slug: string;
  role: string;
  image: string;
  shortBio?: string;
  bio?: PortableTextBlock[];
  socialLinks?: SocialLink[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Abubakar Sadiq Mahmoud",
    slug: "abubakar-sadiq-mahmoud",
    role: "Chief Executive Officer",
    image: "/images/team/CEO.webp",
  },
  {
    name: "Ibrahim Safana",
    slug: "ibrahim-safana",
    role: "Chief Operating Officer",
    image: "/images/team/COO.webp",
  },
  {
    name: "Firdausi Aliyu Dikko",
    slug: "firdausi-aliyu-dikko",
    role: "Executive Director, Digital Transformation",
    image: "/images/team/ED.webp",
  },
  {
    name: "Olomolaiye Obamayowa",
    slug: "olomolaiye-obamayowa",
    role: "Chief Technology Officer",
    image: "/images/team/CTO.webp",
  },
  {
    name: "Zayyad Balarabe Gaya",
    slug: "zayyad-balarabe-gaya",
    role: "Executive Director, Strategy & Innovation",
    image: "/images/team/ED 2.webp",
  },
];
