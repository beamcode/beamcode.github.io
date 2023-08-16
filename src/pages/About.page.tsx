import { useState } from 'react';
import Modal from '../components/Modal';
import EducationSection from '../components/Education.cv'
import SkillsSection from '../components/Skills.cv'
import ExperienceSection from '../components/Experience.cv'
import OtherSection from '../components/Other.cv'

// import pfp from '../assets/pfp.jpg'

// import MacTerminal from '../components/Terminal'
// import RandomQuotes from '../components/RandomQuotes'
// import UsefullLinks from '../components/Links'
// import LinkedinButton from '../components/LinkedinButton'
// import GithubButton from '../components/GithubButton'
// import CvButton from '../components/CvButton'

export default function AboutPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [CopyText, setCopyText] = useState("Copy Email");

  const closeModal = () => {
    setIsModalVisible(false);
    setCopyText("Copy Email");
  };

  const handleCopyPlainText = async () => {
    try {
      await navigator.clipboard.writeText("samuel.palmer@epitech.eu");
      setCopyText("Copied!");
      console.log('Email content copied as plaintext.');
    } catch (error) {
      console.error('Failed to copy email content:', error);
    }
  };

  return (
    <div className='flex flex-col gap-16'>

      {isModalVisible &&
        <Modal title="Email Me" onClose={closeModal}>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Choose your email service!</p>
          <ul className="my-4 space-y-3">
            <li>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=samuel.palmer@epitech.eu" target="_blank" className="flex items-center p-3 text-base text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="47 47 506.78 506.78" className='h-6'>
                  <path d="M163.294 47H437.491C501.918 47 553.785 98.8668 553.785 163.294V437.491C553.785 501.918 501.918 553.785 437.491 553.785H163.294C98.8671 553.785 47 501.918 47 437.491V163.294C47 98.8668 98.8671 47 163.294 47V47Z" fill="#ECECEC" />
                  <path d="M123.82 453.096H188.732V295.451L96 225.902V425.277C96 440.67 108.473 453.096 123.82 453.096Z" fill="#4285F4" />
                  <path d="M411.29 453.096H476.203C491.597 453.096 504.023 440.624 504.023 425.277V225.902L411.29 295.451" fill="#34A853" />
                  <path d="M411.29 174.899V295.451L504.023 225.902V188.809C504.023 154.405 464.751 134.792 437.255 155.425" fill="#FBBC04" />
                  <path d="M188.732 295.451V174.899L300.011 258.358L411.29 174.899V295.451L300.011 378.91" fill="#EA4335" />
                  <path d="M96 188.809V225.902L188.732 295.451V174.899L162.767 155.425C135.226 134.792 96 154.405 96 188.809" fill="#C5221F" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Gmail</span>
              </a>
            </li>
            <li>
              <a href="https://outlook.office.com/mail/deeplink/compose?popoutv2=1&to=samuel.palmer@epitech.eu" target="_blank" className="flex items-center p-3 text-base text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="47 47 506.78 506.78" className='h-6'>
                  <path d="M163.294 47H437.491C501.918 47 553.785 98.8668 553.785 163.294V437.491C553.785 501.918 501.918 553.785 437.491 553.785H163.294C98.8671 553.785 47 501.918 47 437.491V163.294C47 98.8668 98.8671 47 163.294 47V47Z" fill="#DBF0FF" />
                  <g clip-path="url(#clip0_1_15)">
                    <path d="M308.887 108H335.646C335.646 137.847 335.646 167.649 335.646 197.497C382.006 197.586 428.32 197.362 474.635 197.497C483.763 197.049 496.248 199.689 496.069 211.19C497.77 267.796 496.114 324.537 496.875 381.188C497.054 391.212 496.74 407.008 483.092 407.142C434.003 408.843 384.78 407.277 335.646 407.814C335.646 436.139 335.646 464.51 335.646 492.835H307.903C239.706 480.44 171.331 469.029 103.045 457.037C103 352.639 103 248.241 103 143.888C171.644 131.851 240.288 120.216 308.887 108Z" fill="#0071C5" />
                    <path d="M335.646 210.921C385.228 210.966 434.764 210.787 484.345 211.011C483.495 216.873 481.705 222.645 476.783 226.314C447.159 253.924 417.715 281.668 388.181 309.367C370.416 293.303 353.143 276.701 335.646 260.368C335.646 243.856 335.646 227.388 335.646 210.921V210.921Z" fill="white" />
                    <path d="M198.94 227.299C224.179 217.768 253.668 231.148 264.363 255.535C278.95 289.097 276.892 335.008 247.895 360.381C221.18 383.247 176.387 370.225 164.216 337.738C148.196 300.284 155.982 242.648 198.94 227.299V227.299Z" fill="white" />
                    <path d="M402.232 313.35C429.126 287.799 456.243 262.426 483.271 237.009C483.405 289.454 483.271 341.944 483.316 394.389C434.093 394.389 384.87 394.389 335.646 394.389C335.646 355.369 335.602 316.348 335.691 277.372C352.382 292.139 367.328 308.965 385.049 322.434C392.343 323.776 397.265 317.467 402.232 313.35Z" fill="white" />
                    <path d="M203.281 254.193C215.184 248.51 230.085 254.282 235.679 266.051C244.628 283.771 244.584 305.385 238.722 324.09C234.56 337.38 220.017 348.343 205.921 343.108C188.335 337.559 183.01 316.706 182.831 300.373C182.607 283.458 186.5 262.382 203.281 254.193V254.193Z" fill="#0071C5" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_15">
                      <rect width="393.902" height="384.835" fill="white" transform="translate(103 108)" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Outlook</span>
              </a>
            </li>
            <li>
              <a href="mailto:samuel.palmer@epitech.eu" target="_blank" className="flex items-center p-3 text-base text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" preserveAspectRatio="xMidYMid meet" viewBox="20.5 40 799 655.5" className='h-5 dark:fill-white'>
                  <g transform="translate(0.000000,728.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M1393 6861 c-114 -52 -168 -238 -207 -716 -29 -351 -36 -647 -36 -1608 0 -1121 14 -1519 65 -1886 8 -58 15 -108 15 -112 0 -4 -174 -9 -387 -11 -345 -3 -393 -6 -435 -22 -66 -25 -141 -95 -175 -164 l-28 -57 0 -860 0 -860 26 -56 c33 -71 87 -125 158 -158 l56 -26 3760 0 3760 0 52 27 c66 35 116 85 151 151 l27 52 0 865 0 865 -28 57 c-34 69 -109 139 -175 164 -42 16 -90 19 -439 22 -309 2 -393 6 -393 16 0 7 7 57 15 112 22 148 43 425 56 734 17 416 7 2338 -14 2610 -48 612 -97 805 -220 861 -41 18 -111 19 -2802 19 -2691 0 -2761 -1 -2802 -19z m5430 -308 c21 -34 58 -378 79 -723 18 -302 18 -2278 0 -2580 -16 -271 -37 -486 -58 -617 l-17 -103 -2632 0 -2633 0 -11 63 c-34 198 -57 490 -72 929 -14 397 -6 2092 10 2343 21 315 59 657 77 686 6 11 5251 12 5257 2z m1055 -5130 l-3 -778 -3675 0 -3675 0 -3 778 -2 777 3680 0 3680 0 -2 -777z" />
                    <path d="M2085 6216 c-65 -21 -98 -42 -146 -93 -91 -97 -84 28 -84 -1463 l0 -1315 28 -57 c35 -72 110 -141 180 -165 50 -17 145 -18 2112 -18 l2060 0 55 26 c80 37 125 81 162 157 l33 67 0 1310 0 1310 -29 62 c-33 72 -94 134 -164 166 l-47 22 -2060 2 c-1643 1 -2068 -1 -2100 -11z m4075 -1546 l0 -1240 -1995 0 -1995 0 0 1233 c0 679 3 1237 7 1240 3 4 901 7 1995 7 l1988 0 0 -1240z" />
                    <path d="M6100 2820 l0 -110 215 0 215 0 0 110 0 110 -215 0 -215 0 0 -110z" />
                    <path d="M7112 1758 l3 -111 208 -2 207 -2 0 114 0 113 -210 0 -211 0 3 -112z" />
                    <path d="M920 1745 l0 -115 810 0 810 0 0 115 0 115 -810 0 -810 0 0 -115z" />
                  </g>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">System Default</span>
              </a>
            </li>
            <li className='flex gap-3'>
              <button onClick={handleCopyPlainText} className="flex items-center w-full p-3 text-base text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                {CopyText === "Copy Email" ?
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" className='h-6'>
                    <path fill="currentColor" d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z" />
                    <path fill="currentColor" d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z" />
                  </svg>
                  :
                  <svg viewBox="0 12.2 512.03 487.5" className='h-[22px] dark:fill-white'>
                    <path d="M153.4,248.9l73.1,73.1c4.5,4.5,10.8,7.1,17.2,7.1s12.7-2.6,17.2-7.1L504.9,78.2c9.5-9.5,9.5-25,0-34.5s-25-9.5-34.5,0   L243.8,270.3l-55.9-55.9c-9.5-9.5-25-9.5-34.5,0C143.9,223.9,143.9,239.3,153.4,248.9L153.4,248.9z" />
                    <path d="M438.9,256v170.7c0,13.5-10.9,24.4-24.4,24.4H73.1c-13.5,0-24.4-10.9-24.4-24.4V85.3C48.8,71.9,59.7,61,73.1,61h268.2   c13.5,0,24.4-10.9,24.4-24.4c0-13.5-10.9-24.4-24.4-24.4l-268.2,0C32.7,12.2,0,44.9,0,85.3v341.3c0,40.4,32.7,73.1,73.1,73.1h341.3 c40.4,0,73.1-32.7,73.1-73.1V256c0-13.5-10.9-24.4-24.4-24.4S438.9,242.5,438.9,256L438.9,256z" />
                  </svg>
                }
                <span className="ml-3 whitespace-nowrap">{CopyText}</span>
              </button>
            </li>
            <li>
              <div className="flex items-center w-full p-3 outline-none text-base text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="27.38 27.38 677.25 677.12" className='h-6 dark:fill-white'>
                  <path d="M104.8 28c-13.3 2.3-28.4 9.4-40.2 19C47 61.3 34 84.3 28.8 110c-1.9 9.6-1.9 502.4 0 512 7.8 38.9 31.6 67.9 65.2 79.3l9.5 3.2h525l9.5-3.2c33.6-11.4 57.4-40.4 65.2-79.3 1.9-9.6 1.9-502.4 0-512-7.8-38.9-31.6-67.9-65.2-79.3l-9.5-3.2-259.5-.1c-142.7-.1-261.6.2-264.2.6zm525.7 39c16.1 6.8 28.2 21.5 34.7 42l2.3 7.5v499l-2.3 7.5c-6.5 20.5-18.6 35.2-34.7 42l-6 2.5h-517l-6-2.5c-16.1-6.8-28.2-21.5-34.7-42l-2.3-7.5v-499l2.3-7.5c4.7-14.9 12.9-27.5 22.6-34.8 6.4-4.9 8.8-6.1 15.6-8.3 5.2-1.7 18.9-1.8 262.5-1.6l257 .2 6 2.5z" />
                  <path d="M222.5 150.9c-6.8 1.7-11.7 6.5-13.6 13.3-2.1 8 1.8 17.1 9.1 20.8 3.9 2 5.4 2 148 2s144.1 0 148-2c12.9-6.6 12.7-25.7-.4-32.8-2.9-1.6-13.1-1.7-145.6-1.9-78.4 0-143.8.2-145.5.6zM159 289.2c-8.7 2.5-13.5 9.5-12.8 18.9.5 6.8 3.8 11.8 9.8 14.9 3.9 2 6.2 2 210 2s206.1 0 210-2c6-3.1 9.3-8.1 9.8-14.9.7-9.6-4.1-16.4-13.3-19-5.3-1.5-408.3-1.4-413.5.1zM156.5 416.9c-7.2 3.3-10.5 8.6-10.5 16.7 0 6 3.1 11.8 8.2 15.1l4.2 2.8h415.2l4.2-2.8c11.9-7.8 10.6-26-2.2-31.8-4-1.8-11-1.9-209.6-1.9-197.7 0-205.7.1-209.5 1.9zM154.3 544.5c-9.4 5.7-11.2 19.7-3.5 27.8 5.8 6.1-10.6 5.7 215.2 5.7 225.8 0 209.4.4 215.2-5.7 7.7-8.1 5.9-22.2-3.6-27.8l-4.3-2.5H158.5l-4.2 2.5z" />
                </svg>
                <input
                  className="flex-1 ml-3 outline-none bg-transparent"
                  type="email"
                  value="samuel.palmer@epitech.eu"
                  readOnly
                >
                </input>
              </div>

            </li>
          </ul>
        </Modal >
      }

      <div className="flex gap-6 animate-in">
        <div className='flex flex-col justify-between gap-10'>
          {/* <img src={pfp} className="hidden md:block max-h-[300px] w-full rounded-[20px] border-r-8 border-gray-300 object-cover animate-in" /> */}
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
            <h2 className="text-secondary">Connect with me,</h2>
            <ul className="flex gap-6 animated-list" >
              <li className="transition-opacity">
                <a
                  className="underline underline-offset-4"
                  target="_blank"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent page reload
                    setIsModalVisible(true);
                  }}
                  href="#"
                //https://mail.google.com/mail/?view=cm&fs=1&to=samuel.palmer@epitech.eu
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
