export interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Ideathon Winner",
    description: "Secured 1st place in the National Innovation Ideathon 2024 for proposing a sustainable smart-city solution using IoT.",
    image: "src/assets/ideathon.png", // Placeholder path
    link: "#"
  },
  {
    id: 2,
    title: "Coding Forum Lead",
    description: "Led the college coding forum, organizing weekly contests and workshops for over 200+ students to improve DSA skills.",
    image: "src/assets/forum.png", // Placeholder path
    link: "#"
  },
  {
    id: 3,
    title: "E-Box Gold Medalist",
    description: "Achieved Gold E-Box comprehensive skill development program for consistent performance in full-stack assessments.",
    image: "src/assets/achievement/ebox.jpeg", // Placeholder path
    link: "#"
  },
  {
    id: 4,
    title: "E-Box Gold Medalist",
    description: "Achieved Gold E-Box comprehensive skill development program for consistent performance in full-stack assessments.",
    image: "src/assets/achievement/ebox.jpeg", // Placeholder path
    link: "#"
  }
];
