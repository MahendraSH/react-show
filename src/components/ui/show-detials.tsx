import { ShowItem } from "@/types/show-item";

import { FC } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { Card } from "./card";
import { Separator } from "./separator";
import { Image } from "lucide-react";
interface ShowDetailsProps {
  show: ShowItem;
}

const ShowDetails: FC<ShowDetailsProps> = ({ show }) => {
  return (
    <div className="container min-h-screen  mx-auto p-4 ">
      <div className="md:flex  h-full gap-4">
        <div className="w-full md:w-1/3  h-full  flex justify-center  items-center">
          <Card className="bg-secondary text-accent-foreground w-full h-full">
            {show.image?.original ? (
              <img src={show.image?.original} alt={show?.name} className="  " />
            ) : (
              <div className=" flex w-full  min-h-96 lg:min-h-[37rem] justify-center items-center">
                <Image className="md:w-20 md:h-20  w-16 h-16" />
              </div>
            )}
          </Card>
        </div>
        <div className="md:w-2/3 md:ml-auto  flex flex-col gap-5 bg-secondary text-accent-foreground">
          <Card className="p-4 bg-secondary text-accent-foreground min-h-48 ">
            <h2 className="text-2xl font-bold mb-2">{show?.name}</h2>
            <Separator />
            <div className="  prose ">{ReactHtmlParser(show?.summary)}</div>
          </Card>
          <Card className=" bg-secondary text-accent-foreground">
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Details</h2>
              <Separator />
              <p>
                <strong>Status:</strong>{" "}
                <span className=" ">
                  {show.status === "Running" ? (
                    <span className=" text-sm p-1 rounded shadow-sm text-green-600 dark:text-green-300">
                      Ongoing
                    </span>
                  ) : show.status === "In Development" ? (
                    <span className=" text-sm p-1 rounded shadow-sm text-blue-600 dark:text-blue-300  ">
                      Comming soon
                    </span>
                  ) : (
                    <span className=" text-sm p-1 rounded shadow-sm text-orange-600 dark:text-orange-300 ">
                      Completed
                    </span>
                  )}
                </span>
                <br />
                <strong>Language:</strong> {show?.language}
                <br />
                <strong>Genres:</strong> {show?.genres.join(", ")}
                <br />
                <strong>Runtime:</strong> {show?.runtime} minutes
                <br />
                <strong>Average Rating:</strong>{" "}
                <span>
                  {show.rating.average ? (
                    <span className=" text-sm ml-3">
                      {show.rating?.average}/10
                    </span>
                  ) : (
                    <span className=" text-xs ml-3"> no rating</span>
                  )}
                </span>
                <br />
                <strong>Network:</strong> {show?.network?.name}
                <br />
                <strong>Schedule:</strong> {show.schedule?.days.join(", ")} at{" "}
                {show.schedule?.time}
                <br />
                <strong>Official Site:</strong>{" "}
                <Link
                  to={show?.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {show.officialSite}
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
