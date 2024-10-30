import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./components/Services/Services";
import Projects from "./pages/Projects";
import WebLog from "./components/WebLog/WebLog";
import FooterRoute from "./pages/FooterRoute";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/projects", element: <Projects /> },
  { path: "/weblog", element: <WebLog /> },
  { path: "/footer", element: <FooterRoute /> },
];

export default routes;
