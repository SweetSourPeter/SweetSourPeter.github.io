import { Typography } from "@material-tailwind/react";
import { SectionWrapper } from "../hoc";

export function Footer() {
  return (
    <footer className="w-full flex-row items-center justify-center gap-y-6 gap-x-12 py-10 px-10 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Yaopu Wang - Build with React and ThreeJS
      </Typography>
    </footer>
  );
}

export default SectionWrapper(Footer, "footer");
