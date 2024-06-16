import { ExternalLink } from "lucide-react";

import { Footer } from "@/components/footer";
import { Header, HeaderDescription, HeaderHeading } from "@/components/header";
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
  SectionProjects,
  SectionProjectsContent,
  SectionProjectsDescription,
  SectionProjectsHeader,
  SectionProjectsTitle,
} from "@/components/section-projects";
import { IconItem, IconsList } from "@/components/ui/icons-list";
import { StackBadge as SB } from "@/components/ui/stack-badge";

export default function Page() {
  return (
    <>
      <Header themeToggle>
        <HeaderHeading>Ayush Baliyan</HeaderHeading>
        <HeaderDescription>
          Full stack developer based in Delhi, India.
        </HeaderDescription>
      </Header>
      <SectionAPropos>
        <SectionAProposTitle>About</SectionAProposTitle>
        <SectionAProposText animDirection="left">
          I have been passionate about web development for several years.
          Currently in my 2nd year of a Bachelor of Technology in Computer
          Science in USICT, I fully immerse myself in every project, focusing on
          clean code and effective solutions.
        </SectionAProposText>
        <SectionAProposText animDirection="right">
          I develop my software development skills using
          <SB icon="typescript">TypeScript</SB> and{" "}
          <SB icon="javascript">JavaScript</SB> technologies such as{" "}
          <SB icon="nextjs">Next.js</SB> and <SB icon="react">React.js</SB>,
          well as front-end tools like <SB icon="tailwindcss">Tailwind</SB> and{" "}
          <SB icon="shadcnUI">ShadCN</SB>. For the back-end, I specialize in
          <SB icon="nodejs">NodeJS</SB>, <SB icon="express">ExpressJS</SB>, and{" "}
          <SB icon="firebase">Firebase</SB>. I also use <SB icon="git">Git</SB>{" "}
          and <SB icon="sql">SQL</SB>,<SB icon="postgres">Postgres</SB> for
          version control and database. For the deployment and hosting of my
          projects, I use <SB icon="vercel">Vercel</SB> and{" "}
          <SB icon="aws">AWS</SB> along with a with a touch of devops with the
          help of <SB icon="docker">Docker</SB> and{" "}
          <SB icon="kubernetes">Kubernetes</SB>.
        </SectionAProposText>
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
                  <IconItem icon="react" />
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
                  <IconItem icon="java" />
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
                  <IconItem icon="php" />
                  <IconItem icon="symfony" />
                </IconsList>
                <ProjectCardLinks>
                  <ProjectCardLink
                    href="https://github.com/aBgAmeuR/Booktopia"
                    variant="secondary"
                  >
                    GitHub
                    <ExternalLink className="ml-1 size-3" />
                  </ProjectCardLink>
                </ProjectCardLinks>
              </ProjectCardFooter>
            </ProjectCardContent>
          </ProjectCard>
          <ProjectCard animDelay={0.4}>
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
          </ProjectCard>
        </SectionProjectsContent>
      </SectionProjects>
      <Footer />
    </>
  );
}
