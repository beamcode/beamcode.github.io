import EducationSection from '../components/Education.cv'
import SkillsSection from '../components/Skills.cv'
import ExperienceSection from '../components/Experience.cv'
import OtherSection from '../components/Other.cv'
import pfp from '../assets/pfp.jpg'
import pfp_blur from '../assets/pfp_blur.jpg'
import LazyImage from '../helpers/lazyImage'

// import MacTerminal from '../components/Terminal'
// import RandomQuotes from '../components/RandomQuotes'
// import UsefullLinks from '../components/Links'
// import LinkedinButton from '../components/LinkedinButton'
// import GithubButton from '../components/GithubButton'
// import CvButton from '../components/CvButton'

export default function AboutPage() {
  return (
    <div className='flex flex-col gap-16'>

      <div className="flex flex-col md:flex-row gap-6 animate-in" style={{ "--index": 1 } as React.CSSProperties}>
        <div className='flex flex-col justify-between'>
          <div>
            <div className='w-full flex justify-between'>
              <h1 className="mb-3 text-5xl md:text-[40px] w-fit font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Samuel Palmer
              </h1>
            </div>
            <p className="mb-3 text-primary-light dark:text-primary-dark font-normal">
              I am a 22-year-old 4th year student at EPITECH Paris. I'm studying software development and learning new technologies like robotics, embedded development and tech design.
              I am deeply interested in traveling and exploring new destinations. Check out my Github!
            </p>
          </div>

          <section className="flex  text-primary-light dark:text-primary-dark">
            <h2 className="md:w-28 text-secondary shrink-0 ">Connect</h2>
            <ul className="flex gap-6 animated-list">
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
        <LazyImage src={pfp} preview={pfp_blur} className="max-h-[300px] rounded-l-full border-r-8 border-gray-300 object-cover" />
      </div>

      <div className='animate-in flex flex-col gap-10' style={{ "--index": 2 } as React.CSSProperties}>
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <OtherSection />
      </div>
    </div >
  )
}
