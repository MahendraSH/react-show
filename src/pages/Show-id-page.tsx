import LoaderSpiner from "@/components/ui/loder-spiner";
import ShowDetails from "@/components/ui/show-detials";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { useParams } from "react-router-dom";

interface ShowIdPageProps {}

const ShowIdPage: FC<ShowIdPageProps> = ({}) => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["Data"],
    queryFn: () =>
      fetch(import.meta.env.VITE_APP_API).then((res) => res.json()),
  });
  if (isPending) return <LoaderSpiner size={"icon"}/>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <ShowDetails show={data[Number(id)].show} />
    </>
  );
};

export default ShowIdPage;
