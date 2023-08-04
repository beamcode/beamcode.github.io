import EducationSection from '../components/Education.cv'
import SkillsSection from '../components/Skills.cv'
import ExperienceSection from '../components/Experience.cv'
import OtherSection from '../components/Other.cv'
import pfp from '../assets/pfp.jpg'

// import MacTerminal from '../components/Terminal'
// import RandomQuotes from '../components/RandomQuotes'
// import UsefullLinks from '../components/Links'
// import LinkedinButton from '../components/LinkedinButton'
// import GithubButton from '../components/GithubButton'
// import CvButton from '../components/CvButton'

export default function AboutPage() {
  return (
    <div className='flex flex-col gap-16'>

      <div className="flex gap-6 animate-in">
        <div className='flex flex-col justify-between gap-10'>
          <img src={pfp} className="hidden md:block max-h-[300px] w-full rounded-[20px] border-r-8 border-gray-300 object-cover animate-in" />
          <div className='flex flex-col gap-5'>


            <h1 className="mb-3 text-5xl md:text-[40px] w-fit font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Samuel Palmer
            </h1>

            <div className='flex gap-10'>
              <p className="mb-3 text-primary-light dark:text-primary-dark font-normal">
                I'm a 4th year university student at Epitech Paris. Studying software development and learning new technologies like robotics, embedded development and software design.
                I am interested in traveling and exploring new destinations.
              </p>
            </div>

          </div>

          <section className="flex justify-between text-primary-light dark:text-primary-dark animate-in" style={{ "--index": 2 } as React.CSSProperties}>
            <h2 className="md:w-28 text-secondary shrink-0 ">Connect</h2>
            <ul className="flex gap-6 animated-list" >
              <li className="transition-opacity">
                <a
                  className="underline underline-offset-4"
                  target="_blank"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=samuel.palmer@epitech.eu"
                >
                  Email
                </a>
              </li>
              <li className="transition-opacity">
                <a
                  className="underline underline-offset-4"
                  target="_blank"
                  href="https://www.linkedin.com/in/samuel-palmer1/"
                >
                  LinkedIn
                </a>
              </li>
              <li className="transition-opacity">
                <a
                  className="underline underline-offset-4"
                  target="_blank"
                  href="https://github.com/beamcode"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>

        </div>
        {/* <img src={pfp} className="max-h-[100px] rounded-full md:rounded-none md:rounded-bl-[50%] md:border-r-8 border-gray-300 object-cover animate-in" /> */}
      </div>

      <div className='animate-in flex flex-col gap-10' style={{ "--index": 3 } as React.CSSProperties}>
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <OtherSection />
      </div>
    </div >
  )
}
