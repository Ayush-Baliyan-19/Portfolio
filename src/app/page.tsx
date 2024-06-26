import { ExternalLink } from "lucide-react";

import ExpCard from "@/components/experience-card";
import { Footer } from "@/components/footer";
import { Header, HeaderDescription, HeaderHeading } from "@/components/header";
import { Icons } from "@/components/icons";
import { LinkBtn } from "@/components/link-btn";
import {
  ProjectCard,
  ProjectCardContent,
  ProjectCardDescription,
  ProjectCardFooter,
  ProjectCardImage,
  ProjectCardLink,
  ProjectCardLinks,
  ProjectCardTextContent,
  ProjectCardTitle,
} from "@/components/project-card";
import {
  SectionAPropos,
  SectionAProposLinks,
  SectionAProposText,
  SectionAProposTitle,
} from "@/components/section-apropos";
import {
  SectionExperience,
  SectionExperienceContent,
  SectionExperienceDescription,
  SectionExperienceHeader,
  SectionExperienceTitle,
} from "@/components/section-experience";
import {
  SectionProjects,
  SectionProjectsContent,
  SectionProjectsDescription,
  SectionProjectsHeader,
  SectionProjectsTitle,
} from "@/components/section-projects";
import { Button } from "@/components/ui/button";
import { IconItem, IconsList } from "@/components/ui/icons-list";
import { StackBadge as SB } from "@/components/ui/stack-badge";
import { experience } from "@/lib/constant";

export default function Page() {
  return (
    <>
      <Header themeToggle>
        <HeaderHeading>Ayush Baliyan</HeaderHeading>
        <HeaderDescription>
          Software developer based in Delhi, India.
        </HeaderDescription>
      </Header>
      <SectionAPropos>
        <SectionAProposTitle>About</SectionAProposTitle>
        <SectionAProposText animDirection="left">
          I have been passionate about web development for several years.
          Currently in my 3rd year of a Bachelor of Technology in Computer
          Science in USICT, I fully immerse myself in every project, focusing on
          clean code and effective solutions.
        </SectionAProposText>
        <SectionAProposTitle>
          Technologies I{`'`}ve worked on
        </SectionAProposTitle>
        <SectionAProposText animDirection="left">
          <span className="justify-left flex items-center gap-3">
            Frontend: <SB icon="nextjs">Next.js</SB>{" "}
            <SB icon="react">React.js</SB> <SB icon="angular">Angular</SB>{" "}
            <SB icon="tailwindcss">Tailwind</SB> <SB icon="shadcnUI">ShadCN</SB>{" "}
            <SB icon="materialui">MUI</SB> <SB icon="bootstrap">Bootstrap</SB>{" "}
            <br />
          </span>
          <span className="justify-left flex items-center gap-3">
            Backend: <SB icon="nodejs">NodeJS</SB>{" "}
            <SB icon="express">ExpressJS</SB> <SB icon="firebase">Firebase</SB>{" "}
            <SB icon="django">Django</SB> <SB icon="fastApi">FastAPI</SB> <br />
          </span>
          <span className="justify-left flex items-center gap-3">
            Database: <SB icon="sql">SQL</SB> <SB icon="postgres">Postgres</SB>{" "}
            <SB icon="mongodb">MongoDB</SB> <br />
          </span>
          <span className="justify-left flex items-center gap-3">
            Version Control: <SB icon="git">Git</SB>{" "}
            <SB icon="github">GitHub</SB> <br />
          </span>
          <span className="justify-left flex items-center gap-3">
            Deployment: <SB icon="vercel">Vercel</SB> <SB icon="aws">AWS</SB>{" "}
            <br />
          </span>
          <span className="justify-left flex items-center gap-3">
            DevOps: <SB icon="docker">Docker</SB>{" "}
            <SB icon="kubernetes">Kubernetes</SB>
          </span>
          <span className="justify-left flex items-center gap-3">
            Other: <SB icon="tensorflow">TensorFlow</SB>{" "}
            <SB icon="SocketIo">Socket.IO</SB> <SB icon="opencv">OpenCV</SB>{" "}
            <SB icon="threejs">ThreeJs</SB>{" "}
          </span>
        </SectionAProposText>
        {/* <SectionAProposText animDirection="right">
          I develop my software development skills using
          <SB icon="typescript">TypeScript</SB> and{" "}
          <SB icon="javascript">JavaScript</SB> technologies such as{" "}
          <SB icon="nextjs">Next.js</SB> and <SB icon="react">React.js</SB>,
          well as front-end tools like <SB icon="tailwindcss">Tailwind</SB> and{" "}
          <SB icon="shadcnUI">ShadCN</SB>. For the back-end, I specialize in
          <SB icon="nodejs">NodeJS</SB>, <SB icon="express">ExpressJS</SB>, and{" "}
          <SB icon="firebase">Firebase</SB>. I also use <SB icon="git">Git</SB>{" "}
          and <SB icon="sql">SQL</SB>, &nbsp; <SB icon="postgres">Postgres</SB>{" "}
          for version control and database. For the deployment and hosting of my
          projects, I use <SB icon="vercel">Vercel</SB> and{" "}
          <SB icon="aws">AWS</SB> along with a with a touch of devops with the
          help of <SB icon="docker">Docker</SB> and{" "}
          <SB icon="kubernetes">Kubernetes</SB>.
        </SectionAProposText> */}
      </SectionAPropos>

      <SectionProjects>
        <SectionProjectsHeader>
          <SectionProjectsTitle>Projects</SectionProjectsTitle>
          <SectionProjectsDescription>
            Here is a selection of my projects.
          </SectionProjectsDescription>
        </SectionProjectsHeader>
        <SectionProjectsContent>
          <ProjectCard animDelay={0.1}>
            <ProjectCardImage
              src="/images/Timeless.webp"
              width="640"
              height="360"
              alt="Project image"
            />
            <ProjectCardContent>
              <ProjectCardTextContent>
                <ProjectCardTitle>TimeLess</ProjectCardTitle>
                <ProjectCardDescription>
                  Implemented a time scheduling system with notes and integrated
                  a streamlined timetable and attendance management system for
                  educators.
                </ProjectCardDescription>
              </ProjectCardTextContent>
              <ProjectCardFooter>
                <IconsList>
                  <IconItem icon="nextjs" />
                  <IconItem icon="javascript" />
                  <IconItem icon="nodejs" />
                  <IconItem icon="mongodb" />
                  <IconItem icon="express" />
                  <IconItem icon="scss" />
                </IconsList>
                <ProjectCardLinks>
                  <ProjectCardLink
                    href="https://timeless-drab.vercel.app/"
                    variant="primary"
                  >
                    Try it out
                    <ExternalLink className="ml-1 size-3" />
                  </ProjectCardLink>
                  <ProjectCardLink
                    href="https://github.com/Ayush-Baliyan-19/TimeLess"
                    variant="secondary"
                  >
                    GitHub
                    <ExternalLink className="ml-1 size-3" />
                  </ProjectCardLink>
                </ProjectCardLinks>
              </ProjectCardFooter>
            </ProjectCardContent>
          </ProjectCard>
          <ProjectCard animDelay={0.2}>
            <ProjectCardImage
              src="/images/SilentSpeak.webp"
              width="1920"
              height="993"
              alt="Project image"
            />
            <ProjectCardContent>
              <ProjectCardTextContent>
                <ProjectCardTitle>SilentSpeak</ProjectCardTitle>
                <ProjectCardDescription>
                  A video conferencing application in which I integrated
                  advanced hand sign recognition technology for non-verbal
                  communicators and added live captions feature to enhance
                  accessibility during video conferences.
                </ProjectCardDescription>
              </ProjectCardTextContent>
              <ProjectCardFooter>
                <IconsList>
                  <IconItem icon="nextjs" />
                  <IconItem icon="tensorflow" />
                  <IconItem icon="tailwindcss" />
                  <IconItem icon="shadcnUI" />
                  <IconItem icon="SocketIo" />
                </IconsList>
                <ProjectCardLinks>
                  <ProjectCardLink
                    href="https://meet-for-mute.vercel.app/"
                    variant="primary"
                  >
                    Try it out
                    <ExternalLink className="ml-1 size-3" />
                  </ProjectCardLink>
                  <ProjectCardLink
                    href="https://github.com/Ayush-Baliyan-19/MeetForMute"
                    variant="secondary"
                  >
                    GitHub
                    <ExternalLink className="ml-1 size-3" />
                  </ProjectCardLink>
                </ProjectCardLinks>
              </ProjectCardFooter>
            </ProjectCardContent>
          </ProjectCard>
          <ProjectCard animDelay={0.3}>
            <ProjectCardImage
              src="/images/GridGladiators.webp"
              width="1920"
              height="993"
              alt="Project image"
            />
            <ProjectCardContent>
              <ProjectCardTextContent>
                <ProjectCardTitle>GridGladiators</ProjectCardTitle>
                <ProjectCardDescription>
                  GridGladiators is a modern take on classic tic-tac-toe,
                  offering customizable grid sizes for deeper strategy. Engage
                  in competitive matches with real-time multiplayer, utilize
                  strategic power-ups like &apos;Clear Cell&apos;, and track
                  scores scores dynamically. Enjoy cross-platform play, vibrant
                  interactions, and immersive visual and audio feedback for an
                  exciting gaming experience.
                </ProjectCardDescription>
              </ProjectCardTextContent>
              <ProjectCardFooter>
                <IconsList>
                  <IconItem icon="nextjs" />
                  <IconItem icon="tailwindcss" />
                  <IconItem icon="shadcnUI" />
                  <IconItem icon="SocketIo" />
                  <IconItem icon="fastApi" />
                </IconsList>
                <ProjectCardLinks>
                  <ProjectCardLink
                    href="https://github.com/Ayush-Baliyan-19/Tic-Tac-Toe"
                    variant="secondary"
                  >
                    GitHub
                    <ExternalLink className="ml-1 size-3" />
                  </ProjectCardLink>
                </ProjectCardLinks>
              </ProjectCardFooter>
            </ProjectCardContent>
          </ProjectCard>
          {/* <ProjectCard animDelay={0.4}>
            <ProjectCardImage
              src="/images/progiso-min.webp"
              width="1920"
              height="993"
              alt="Project image"
            />
            <ProjectCardContent>
              <ProjectCardTextContent>
                <ProjectCardTitle>Progiso</ProjectCardTitle>
                <ProjectCardDescription>
                  Plateforme de gestion de projet conçue pour simplifier la
                  gestion des projets des petites et moyennes équipes.
                </ProjectCardDescription>
              </ProjectCardTextContent>
              <ProjectCardFooter>
                <IconsList>
                  <IconItem icon="nextjs" />
                  <IconItem icon="typescript" />
                  <IconItem icon="shadcnUI" />
                  <IconItem icon="tailwindcss" />
                </IconsList>
                <ProjectCardLinks>
                  <ProjectCardLink
                    href="https://progiso.vercel.app/"
                    variant="primary"
                  >
                    Tester
                    <ExternalLink className="ml-1 size-3" />
                  </ProjectCardLink>
                  <ProjectCardLink
                    href="https://github.com/aBgAmeuR/Progiso"
                    variant="secondary"
                  >
                    GitHub
                    <ExternalLink className="ml-1 size-3" />
                  </ProjectCardLink>
                </ProjectCardLinks>
              </ProjectCardFooter>
            </ProjectCardContent>
          </ProjectCard> */}
        </SectionProjectsContent>
        <div className="flex w-full items-center justify-center">
          <Button className="w-min rounded-xl" asChild>
            <a href="https://github.com/ayush-baliyan-19" target="_blank">
              <Icons.github className="mr-2 size-4" /> Check out more projects{" "}
              <ExternalLink className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </SectionProjects>

      <SectionExperience>
        <SectionExperienceHeader>
          <SectionExperienceTitle>Experience</SectionExperienceTitle>
          <SectionExperienceDescription>
            What experience I&apos;ve gained over the years
          </SectionExperienceDescription>
        </SectionExperienceHeader>
        <SectionExperienceContent>
          {!experience
            ? "Loading"
            : experience.map((exp, index) => {
                return (
                  <div key={index}>
                    <ExpCard
                      img={exp.Image}
                      companyName={exp.Company}
                      role={exp.Role}
                      description={exp.Description}
                      timePeriod={exp.Time}
                      tech={exp.Tech}
                    />
                  </div>
                );
              })}
        </SectionExperienceContent>
      </SectionExperience>

      <SectionAProposLinks>
        <LinkBtn
          icon="github"
          label="GitHub"
          link="https://github.com/Ayush-Baliyan-19"
          animDelay={0.1}
        >
          @Ayush-Baliyan-19
        </LinkBtn>
        <LinkBtn
          icon="linkedin"
          label="LinkedIn"
          link="https://linkedin.com/in/ayush-baliyan/"
          animDelay={0.2}
        >
          @ayush-baliyan
        </LinkBtn>
        {/* <LinkBtn
            icon=""
            label="Website"
            link="https://open.spotify.com/user/flps7duvtycn9yto85qwxpqtp"
            animDelay={0.3}
          >
            Antoine
          </LinkBtn> */}
      </SectionAProposLinks>
      <Footer />
    </>
  );
}
