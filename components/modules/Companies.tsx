import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import Apple from "../icons/Apple";
import Binance from "../icons/Binance";

const Companies = () => {
  return (
    <div className="flex items-center justify-around">
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}

export default Companies;