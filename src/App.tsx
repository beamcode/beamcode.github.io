import Header from './components/Header';
import HomePage from './pages/Home.page';
import { Routes, Route, Outlet } from "react-router-dom";
import NotFound from './pages/404.page';
import AboutPage from './pages/About.page';
import BlogPage from './pages/Blog.page';
import SpotifyWidget from './components/SpotifyWidget';
import RainbowProgressBar from './components/RainbowScrollBar';
import BurgerCursor from './components/BurgerCursor';
import Footer from './components/Footer';
// import ThemeToggle from './components/ThemeToggle';

function Layout() {
  return (
    <div className='relative antialiased font-medium font-sans'>
      <RainbowProgressBar />
      <BurgerCursor />

      <Header />
      <main className='px-4 md:px-6 pt-10 md:pt-20 pb-24 md:pb-44 max-w-[700px] mx-auto'>
        <Outlet />
      </main>
      <Footer />

      <div className='fixed flex bottom-0 right-0 z-10 p-5 w-full sm:w-[400px] transition delay-300'>
        <SpotifyWidget className="w-full" />
      </div>
    </div>
  )
}

export default function App() {
  // document.documentElement.classList.add('dark');
  console.log('%cWhatcha doing here?!', 'color: red; font-size: 30px; font-weight: bold;');
  document.body.classList.add('dark:bg-primary-main')

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
