export interface Achievement {
  title: string;
  desc: string;
  image: string;
  gradient: string;
}

export const achievements: Achievement[] = [
  {
    title: "Card One",
    desc: "This is content from card one displayed on the TV.",
    image: "src/assets/achievement/ideathon.jpeg",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Card Two",
    desc: "This is content from card two displayed on the TV.",
    image: "src/assets/achievement/ebox.jpeg",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Card Three",
    desc: "This is content from card three displayed on the TV.",
    image: "src/assets/achievement/coding forum.jpeg",
    gradient: "from-green-500 to-emerald-500",
  },
];
