import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { SocialLinksIcons } from "./Socials";
 
export function FooterWithLogo() {
  return (
    <footer className="w-full bg-transparent p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-transparen text-center md:justify-between">
        <Link to="/"><img src="/Logo/create-with-eric.png" alt="Developer and Designer - Create with Eric" loading="lazy" width={100} /></Link>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link to="/about/">
              <Typography
                as="a"
                href="#"
                color="blue"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                About Me
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/projects/">
              <Typography
                as="a"
                href="#"
                color="blue"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                My Projects
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/community/">
              <Typography
                as="a"
                href="#"
                color="blue"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Join Community
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/insights/">
              <Typography
                as="a"
                href="#"
                color="blue"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Insights
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/contact/">
              <Typography
                as="a"
                href="#"
                color="blue"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Contact Me
              </Typography>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <SocialLinksIcons />
      <Typography 
      color="blue" 
      className="text-center font-normal"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      >
        &copy; <Link to="/">2025 Create-With-Eric</Link>
      </Typography>
    </footer>
  );
}