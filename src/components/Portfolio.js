import { useSelector } from "react-redux";
import { STOCK_LIST } from "../store/data";
import { PortfolioItem } from "./PortfolioItem";

export const Portfolio = () => {
  const stocks = useSelector((state) => state["owned_stocks"]);

  console.log(stocks);
  return (
    <div className="flex-column gap-1">
      <h2>Portfolio</h2>

      <ul className="flex-column gap-1">
        {stocks.map((stock) => (
          <PortfolioItem stock={stock} />
        ))}
      </ul>
    </div>
  );
};
