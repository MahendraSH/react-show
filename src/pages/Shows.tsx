import LoaderSpiner from "@/components/ui/loder-spiner";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { Item } from "@/types/show-item";
import ShowCard from "@/components/show-card";
interface ShowsProps {}

const Shows: FC<ShowsProps> = ({}) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["Data"],
    queryFn: () =>
      fetch(import.meta.env.VITE_APP_API).then((res) => res.json()),
  });
  if (isPending) return <LoaderSpiner size={"icon"} />;

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className=" grid  grid-flow-row lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-5 mt-8  w-full  md:mx-4">
      {data.map((item: Item, index: number) => (
        <ShowCard item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default Shows;
