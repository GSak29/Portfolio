import ideathonImg from "../../assets/achievement/ideathon.jpeg";
import codingForumImg from "../../assets/achievement/coding-forum.jpeg";
import eboxImg from "../../assets/achievement/ebox.jpeg";

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
    title: "Ideathon Runner",
    description: "Secured 2nd place in the Ideathon 2025 for proposing a Solution For Indian Sign Language  Bidirectional-Translator & Won a cash Prize of Rs.2500",
    image: ideathonImg, // Placeholder path
    link: "https://www.linkedin.com/posts/gsak2985_innovation-ai-llm-activity-7389275545055948800-0PCY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGjDlkBT6uDA4DJQGDOfJHK4eE-pdsyurQ"
  },
  {
    id: 2,
    title: "Coding Contest On C - Winner",
    description: "Winner in Coding Contest Conducted By Coding Forum among my Batch Students & Won a cash Prize of Rs.1500 ",
    image: codingForumImg, // Placeholder path
    link: "https://www.linkedin.com/posts/gsak2985_coding-cprogramming-keccodingforum-activity-7325060129584832512-vGcq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGjDlkBT6uDA4DJQGDOfJHK4eE-pdsyurQ"
  },
  {
    id: 3,
    title: "E-Box Coding Contest",
    description: "Achieved 5th Prize in Timing Based Coding Contest conducted by E-Box and Won a Prize Amount of Rs.6000",
    image: eboxImg, // Placeholder path
    link: "https://www.linkedin.com/posts/gsak2985_codingcompetition-topcoders-hackathon-activity-7324657524551426048-haQr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGjDlkBT6uDA4DJQGDOfJHK4eE-pdsyurQ"
  },

];
