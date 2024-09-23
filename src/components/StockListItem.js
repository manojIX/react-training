import { useDispatch, useSelector } from "react-redux";
import { buy } from "../store/data";

export const StockListItem = ({ stock }) => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance);
  const canBuy = balance >= stock.price;

  const handleBuy = () => {
    dispatch(buy(stock.id));
  };

  return (
    <li className="stock-list-item" key={stock.id}>
      <div className="stock-name">{stock.name}</div>
      <div>${stock.price.toFixed(2)}</div>
      {canBuy && (
        <button className="buy-button" onClick={handleBuy}>
          Buy
        </button>
      )}
    </li>
  );
};
