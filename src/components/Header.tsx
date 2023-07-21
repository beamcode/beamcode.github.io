import pfp from "../assets/pfp.jpg";
import NavBar from "./NavBar";
import ThemeSetter from "../helpers/ThemeSetter";
import ThemeToggleGray from "./ThemeToggleGray";
// import ThemeToggle from "./ThemeToggle";
// import ThemeButtonEmoji from "./ThemeButtonEmoji";
// import ThemeButton from "./ThemeButton";

export default function Header() {
  // const components = [
  //   <ThemeButton clicked={ThemeSetter} />,
  //   <ThemeToggle clicked={ThemeSetter} />,
  //   <ThemeButtonEmoji clicked={ThemeSetter} />,
  //   <ThemeToggle2 clicked={ThemeSetter} />,
  // ];
  // const randomIndex = Math.floor(Math.random() * components.length);
  // const randomComponent = components[randomIndex];

  return (
    <header className="sticky top-0 z-10">
      <nav className="mx-auto flex max-w-[700px] items-center backdrop-blur-md justify-between px-4 py-4 md:px-6 md:py-2">
        <a href="/" className="hidden shrink-0 sm:block h-8 w-8 rounded-full overflow-hidden transition hover:scale-110">
          <img src={pfp} alt="Samuel Palmer avatar" className="hover:animate-spin" />
        </a>
        <NavBar />
        <ThemeToggleGray clicked={ThemeSetter} />
        {/* {randomComponent} */}
      </nav>
    </header>
  );
}
