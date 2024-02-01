import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Image, MoveRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { Item } from "@/types/show-item";

interface ShowCardProps {
  item: Item
  index: number;
}

const ShowCard: FC<ShowCardProps> = ({ item, index }) => {
  return (
    <>
      <Card className=" card-md hidden md:block  bg-secondary text-secondary-foreground md:w-72 w-full  shadow shadow-muted-foreground ">
        <CardHeader className="">
          <CardTitle className=" lg:mx-auto tracking-tight">
            {item.show.name}
          </CardTitle>
        </CardHeader>
        <CardContent className=" ">
          {item.show.image?.medium ? (
            <img
              src={item.show.image?.medium}
              alt={item.show.name}
              className="w-44 h-56 lg:mx-auto  rounded-lg border-2"
            />
          ) : (
            <div className=" flex  justify-center items-center w-44 h-56 lg:mx-auto  rounded-lg border-2">
              <Image className="w-10 h-10 " />
            </div>
          )}
          <CardDescription className=" flex justify-start items-center  mt-4 mx-2">
            <span className="  w-1/3">
              <span className="kbd-xs bg-primary/5 text-accent-foreground text-sm font-semibold p-1 px-2 rounded">
                {item.show.language}
              </span>
            </span>
            <span className="w-2/3 flex gap-x-2 ml-auto justify-end">
              {item.show?.genres.map((it: string) => (
                <span
                  className="kbd-xs bg-primary text-primary-foreground p-1 rounded"
                  key={it}
                >
                  {it}
                </span>
              ))}
            </span>
          </CardDescription>
        </CardContent>
        <CardFooter className=" flex gap-x-2">
          <div className=" w-1/2">
            {item.show.status === "Running" ? (
              <span className=" text-sm p-1 rounded shadow-sm text-green-600 dark:text-green-300">
                Ongoing
              </span>
            ) : item.show.status === "In Development" ? (
              <span className=" text-sm p-1 rounded shadow-sm text-blue-600 dark:text-blue-300  ">
                Comming soon
              </span>
            ) : (
              <span className=" text-sm p-1 rounded shadow-sm text-orange-600 dark:text-orange-300 ">
                Completed
              </span>
            )}
            {item.show.rating.average ? (
              <span className=" text-sm ml-3">
                {item.show.rating?.average}/10
              </span>
            ) : (
              <span className=" text-xs ml-3">{/* no rating */}</span>
            )}
          </div>

          <Link to={`/shows/${index}`} className=" w-1/2 flex justify-end ">
            <Button variant={"outline"}>
              more <MoveRightIcon className="w-4 h-4 ml-3 " />
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="   md:hidden  bg-secondary text-secondary-foreground md:w-72 w-full  shadow shadow-muted-foreground ">
        <CardHeader className="">
          <CardTitle className=" lg:mx-auto tracking-tight">
            {item.show.name}
          </CardTitle>
          <Separator />
        </CardHeader>
        <div className=" flex ">
          <div>
            <CardContent className=" ">
              {item.show.image?.medium ? (
                <img
                  src={item.show.image?.medium}
                  alt={item.show.name}
                  className="w-36 h-52 lg:mx-auto  rounded-lg border-2"
                />
              ) : (
                <span className=" flex  justify-center items-center w-36 h-52 lg:mx-auto  rounded-lg border-2">
                  <Image className="w-10 h-10 " />
                </span>
              )}
            </CardContent>
          </div>
          <div className=" flex flex-col mt-2 ml-auto mr-2  gap-y-4 ">
            <div className=" flex flex-col  gap-y-4  ">
              <div className="w-full">
                <div className="kbd-xs bg-primary/5 text-accent-foreground text-sm font-semibold p-1 px-2 rounded">
                  {item.show.language}
                </div>
              </div>
              <div className=" flex gap-x-2  w-full">
                {item.show?.genres.map((it: string) => (
                  <div
                    className="kbd-xs bg-primary text-primary-foreground p-1 rounded"
                    key={it}
                  >
                    {it}
                  </div>
                ))}
              </div>
            </div>

            <CardFooter className=" flex  flex-col gap-y-4 justify-start items-start">
              <div className=" ">
                {item.show.status === "Running" ? (
                  <div className=" text-sm p-1 rounded shadow-sm text-green-600 dark:text-green-300">
                    Ongoing
                  </div>
                ) : item.show.status === "In Development" ? (
                  <div className=" text-sm p-1 rounded shadow-sm text-blue-600 dark:text-blue-300  ">
                    Comming soon
                  </div>
                ) : (
                  <div className=" text-sm p-1 rounded shadow-sm text-orange-600 dark:text-orange-300 ">
                    Completed
                  </div>
                )}
              </div>
              <div>
                {item.show.rating.average ? (
                  <div className=" text-sm ml-3">
                    {item.show.rating?.average}/10
                  </div>
                ) : (
                  <div className=" text-xs ml-3"> no rating</div>
                )}
              </div>
              <div>
                <Link to={`/shows/${index}`} className="   ">
                  <Button variant={"outline"}>
                    more <MoveRightIcon className="w-4 h-4 ml-3 " />
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ShowCard;
