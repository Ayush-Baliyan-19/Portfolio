export const siteConfig = {
  title: "Ayush Baliyan - Portfolio",
  description:
    "Software developer based in Delhi, India. Passionate about software development for several years.",
  keywords: [
    "Ayush Baliyan",
    "portfolio",
    "developer",
    "full stack",
    "NextJs",
    "ReactJs",
    "NodeJs",
    "Devlopment",
    "computer science",
    "web",
    "software",
  ],
  animationDuration: 0.5,
};
type descriptionType = {
  [key: string]: string;
};

interface experienceInterface {
  Company: string;
  Role: string;
  Description: string | descriptionType;
  Image: string;
  Time: string[];
  Tech: string[];
}

export const experience: experienceInterface[] = [
  {
    Company: "DOTS",
    Role: "SDE Intern",
    Description:
      "Transformed a frontend-focused project into a full-stack application and revamped backend infrastructure, guided by Praveen Soni. This initiative enhanced backend efficiency by 30%, resulting in analysis values increasing from 0.313 to 2.71, and improved user satisfaction scores by 20%.",
    Image: "/images/DOTS.webp",
    Time: ["July' 23", "December' 23"],
    Tech: ["nextjs", "javascript", "nodejs", "sql", "express", "tailwindcss"],
  },
  {
    Company: "Freelancer",
    Role: "Full Stack Developer",
    Description:
      "Designed a scalable global platform for a home temple business, boosting user engagement and online sales by 40%, and engineered a high-performance backend handling 10,000 daily requests, streamlining user management, enhancing personalized shopping, and integrating secure payment gateways, leading to a 25% increase in completed purchases.",
    Image: "/images/Freelance.webp",
    Time: ["Present"],
    Tech: [
      "react",
      "nodejs",
      "mongodb",
      "express",
      "tailwindcss",
      "aws",
      "vercel",
      "php",
      "angular",
    ],
  },
  {
    Company: "SDC GGSIPU",
    Role: "President",
    Description: {
      // eslint-disable-next-line prettier/prettier
      Events:
        "Leveraged exceptional public speaking skills to deliver captivating presentations to diverse audiences of 1000+ attendees, resulting in a 30% increase in event satisfaction scores and a 25% rise in post-event engagement",
      "Project Management":
        "Led a multifaceted project portfolio as the Chair, notably overseeing the overhaul and enhancement of the official IPU website (ipu.ac.in). This initiative resulted in a remarkable 20% boost in website traffic",
    },
    Image: "/images/SDC.webp",
    Time: ["July' 23", "December' 23"],
    Tech: [
      "nextjs",
      "javascript",
      "nodejs",
      "mongodb",
      "express",
      "tailwindcss",
    ],
  },
  {
    Image: "/images/anugoonj_ggsipu.webp",
    Company: "Anugoonj GGSIPU",
    Role: "Website Lead",
    Description:
      "Lead a team of developers to create the official website of Anugoonj, the annual cultural fest of GGSIPU focusing on animations, responsive design, and user interaction features. Working collaboratively, I emphasized teamwork, fostering a dynamic environment that enhanced our collective web development capabilities.",
    Time: ["February '23", "March '23"],
    Tech: ["nextjs", "javascript", "tailwindcss", "vercel", "figma"],
  },
  {
    Image: "/images/InfoXpression.webp",
    Company: "InfoXpression USICT",
    Role: "Web Developer",
    Description: {
      "Design And Fronted Development":
        "As part of the web development team for InfoXpression, the technical fest of GGSIPU, I played a crucial role in designing and creating multiple user apealing components. Working collaboratively, we ensured seamless functionality and an engaging user experience for the event's online platform.",
      "Backend Development":
        "Developed a secure backend system able to handle huge crowd of 50000+ registrations for events. The system was able to handle 1000+ requests per second.",
      "Leading The Campus Ambassador Program":
        "Led a team of 10+ campus ambassadors to promote the event in their respective colleges, resulting in a 30% increase in event participation.",
    },
    Time: ["July '22", "September '22"],
    Tech: ["react", "javascript", "tailwindcss", "vercel", "figma"],
  },
];
