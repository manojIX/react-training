import "./styles.css";
import { Link } from "@tanstack/react-router";

type Props = {
  title: string;
  description: string;
  cost?: string;
  subtext: string;
  imageUrl: string;
  oldPrice?: string;
  url: string;
};

export default function MainCard({
  title,
  description,
  cost,
  subtext,
  imageUrl,
  url,
}: Props) {
  return (
    <div className="main-card rounded-xl">
      <h2 className="text-[1.875rem] text-center font-bold">{title}</h2>
      <div className="text-[16px] font-light text-center my-[16px]">
        {description}
      </div>
      <div className="text-center font-light text-[16px] pt-[5px]">{cost}</div>
      <div className="my-5 justify-center gap-x-10 flex items-center py-[15px]">
        <button className="px-[24px] py-[5.125px] border-black border-[3px] rounded-md">
          Explore
        </button>
        <Link to={url}>Shop now</Link>
      </div>
      <div className="text-[16px] font-light text-center">{subtext}</div>
      <img src={imageUrl} className="pt-[33px] mx-auto" />
    </div>
  );
}
