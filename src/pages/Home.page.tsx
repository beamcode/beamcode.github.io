import website from "../assets/beamcodedev.png";
import bagnole from "../assets/bagnole.png";
import bounceMaster from "../assets/BounceMaster.png";
import MacTerminal from "../components/Terminal";

function LookingForWork() {
  return (
    <div className="flex flex-row gap-2 items-center w-full text-secondary-light dark:text-secondary-dark animate-in" style={{ "--index": 2 } as React.CSSProperties}>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <p>Available for new opportunities.</p>
    </div>
  );
}

function ProjectComponent({
  title,
  date,
  image,
  technologies,
  description,
  demo_link,
  github_link
}: {
  title: string,
  date: string,
  image: string,
  technologies: string[],
  description: string,
  demo_link?: string,
  github_link?: string
}) {
  return (
    <li>
      <section className="flex flex-col md:flex-row gap-1 md:gap-9">
        <div className="flex flex-col-reverse sm:flex-row gap-5 w-full  overflow-hidden border-l-4 border-b-4 shadow-[0_15px_30px_rgba(200,_200,_200,_0.3)] rounded-bl-lg">

          <div className="grow space-y-5 p-6">
            <div className="flex items-center justify-between w-full">
              <h1 className="text-xl">{title}</h1>
              <h2 className="text-secondary-light shrink-0">{date}</h2>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] dark:text-black">
              {technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-secondary-light dark:bg-secondary-light rounded-md">{tech}</span>
              ))}
            </div>
            <p className="text-secondary-light dark:text-secondary-dark">{description}</p>

            <div className="flex flex-wrap gap-5 text-sm">
              {demo_link && <a href={demo_link} target="_blank" className="underline underline-offset-4">Live Demo ↗</a>}
              {github_link && <a href={github_link} target="_blank" className="underline underline-offset-4">Github ↗</a>}
            </div>
          </div>
          <div className="rounded-tr-lg sm:rounded-l-[0] overflow-hidden md:min-w-[200px] md:max-w-[200px] shadow cursor-pointer">
            <a href={demo_link ? demo_link : github_link} target="_blank">
              <img src={image} className="object-cover h-full transition duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
      </section >
    </li >
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col w-full gap-28 text-primary-light dark:text-primary-dark animate-in">
      <div className='flex flex-col sm:flex-row gap-6 sm:items-center'>
        <div className='flex flex-col'>
          <div className="flex items-center">
            <h1 className="font-bold text-[40px] mr-2">Hi.</h1>
            <h1 className="font-bold text-[40px] animate-wave origin-[70%_70%] hover:animate-wave-hover">👋</h1>
            {/* <h1 className="font-bold text-[40px] animate-wave origin-[70%_70%] hover:animate-wave-hover">🍔</h1> */}
          </div>
          <p className="animate-in text-secondary-light dark:text-secondary-dark whitespace-nowrap" style={{ "--index": 1 } as React.CSSProperties}>
            I code stuff & enjoy traveling.
          </p>
          <LookingForWork />
        </div>
      </div>

      <div className="flex flex-col gap-20 animate-in" style={{ "--index": 3 } as React.CSSProperties}>
        <h2 className="text-xl font-extralight">Selected projects</h2>

        <ul className="flex flex-col gap-10">
          <ProjectComponent
            title="Bagnole"
            date="In development"
            technologies={["Nextjs", "Typescript", "TailwindCSS", "Prisma", "React Native"]}
            image={bagnole}
            description="Next generation car meet-up app. Find car events near you, meet new people and share your passion for cars"
            demo_link="https://bagnoleapp.fr/"
          />

          <ProjectComponent
            title="Personal Website"
            date="07 / 2021"
            technologies={["Reactjs", "Typescript", "TailwindCSS"]}
            image={website}
            description="A vibrant and dynamic personal website that showcases the best of who I am, highlighting my incredible work, valuable experiences, and infectious enthusiasm.."
            demo_link="https://beamcode.dev"
            github_link="https://github.com/beamcode/beamcode.dev"
          />

          <ProjectComponent
            title="BounceMaster"
            date="04 / 2021"
            technologies={["Unity", "C#"]}
            image={bounceMaster}
            description="A 2D platformer game made in Unity. The player controls a ball and must reach the end of the level by bouncing off of platforms and avoiding obstacles."
            github_link="https://github.com/beamcode/bounce_master"
          />
        </ul>
      </div>

      <MacTerminal />
    </div >
  )
}

{/* <div className='flex flex-col gap-4'>
        <RandomQuotes />
        <UsefullLinks />
        <MacTerminal />
        <GuestBook />
      </div> */}