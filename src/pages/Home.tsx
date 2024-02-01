import Headings from "@/components/headings";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <>
      <main className="h-full w-full bg-secondary/5 flex justify-center items-center ">
        <Headings />
      </main>
    </>
  );
};

export default Home;
