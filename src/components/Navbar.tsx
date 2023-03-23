import { RiDvdLine } from "react-icons/ri/index.js";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs/index.js";
import materialTailwind from "@material-tailwind/react";
const { IconButton, Tooltip } = materialTailwind;
import { useState } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const darkMode = () => setTheme(!theme);
  return (
    <>
      <nav className="py-4 px-4 flex justify-between sticky top-0 z-50 bg-[#F6F6F6]  items-center">
        <div className="flex items-center">
          <RiDvdLine className="w-8 h-8 icon" />
          <span className="icon">ExitoPersonal</span>
        </div>
        <Tooltip content="no funciona aun" placement="left">
          <IconButton variant="text" aria-label="dark theme" onClick={darkMode}>
            {theme ? (
              <BsSunFill className="h-6 w-7  text-blue-900" />
            ) : (
              <BsMoonStarsFill className="h-6 w-7  text-blue-900" />
            )}
          </IconButton>
        </Tooltip>
      </nav>
    </>
  );
};

export default Navbar;
