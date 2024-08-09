import {
  Route,
  HashRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/ui/navbar";
import Home from "./pages/home";
import { isMobile } from "react-device-detect";
import Avis from "./pages/avis";
import { Button } from "./components/ui/button";
import Logo from "./components/ui/logo";
import BlurFade from "./components/magicui/blur-fade";
import { useTheme } from "./components/theme-provider";
import { MoonIcon, SunIcon } from "lucide-react";
import { Toaster } from "./components/ui/toaster";
import Projets from "./pages/projets";

function App() {
  const { theme, setTheme } = useTheme();
  let navigate = useNavigate();
  return (
    <Router>
      <Toaster />
      {isMobile ? (
        <Navbar />
      ) : (
        <div className="flex p-5 md:max-lg:hidden">
          <BlurFade key={"Logo"} inView>
            <div className="flex gap-5">
              <Logo />
              <Button variant={"outline"} onClick={() => navigate("/projets")}>
                Projets
              </Button>
              <Button variant={"outline"} onClick={() => navigate("/avis")}>
                Avis
              </Button>
              <Button variant={"outline"}>Connaissances</Button>
              <Button variant={"outline"}>Contacter</Button>
              <Button
                variant={"outline"}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <div className="flex gap-2">
                    <SunIcon /> light mode
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <MoonIcon /> dark mode
                  </div>
                )}
              </Button>
            </div>
          </BlurFade>
          {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-white-500 bg-clip-text text-center text-8xl font-semibold text-transparent md:max-lg:text-white dark:from-white dark:to-black">
        <WordPullUp words=" Maxence Perlot" className="text-6xl" /> */}
          {/* <div className="grow"/>*/}
          {/* </span> */}
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
