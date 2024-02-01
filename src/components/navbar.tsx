import { FC } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <>
      <div className="navbar  p-0 m-0 shadow shadow-muted-foreground  h-8">
        <Link to={"/"}>
          <Button variant={"navbar"} className="   gap-2">
            <img
              src="/Logo1.png"
              alt="/Logo1.png"
              className="w-6 h-6  hidden dark:flex mt-1 "
            />
            <img
              src="/logo-light.png"
              alt="/Logo1.png"
              className="w-7 h-7  flex dark:hidden "
            />
            Shows-lit
          </Button>
        </Link>

        <div className=" flex  space-x-6 ml-auto  mr-5">
          <Link to={"/shows"}>
            <Button variant={"ghost"}> shows </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
