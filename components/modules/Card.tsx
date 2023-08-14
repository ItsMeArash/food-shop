import { MenuItem } from "@/types";
import Location from "@/components/icons/Location";
import Dollar from "@/components/icons/Dollar";
import Link from "next/link";

const Card = ({ id, name, price, details, discount }: MenuItem) => {
  return (
    <div className="flex flex-col w-[270px] mb-10 shadow-lg p-3 rounded-lg relative">
      <img src={`/images/${id}.jpeg`} alt={name} className="w-full rounded" />
      <div className="flex items-baseline justify-between text-gray-500 text-sm my-5">
        <h4 className="text-header font-medium text-base">{name}</h4>
        <div className="flex items-baseline justify-center">
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className="flex justify-start items-center">
        <Dollar />
        {discount ? (
          <span className="text-[#ed4133]">{(price * (100 - discount)) / 100}$</span>
        ) : (
          <span>{price}$</span>
        )}
        {discount ? <div className="bg-[#ed4133] text-white p-1 rounded-md border-2 border-white absolute top-4 left-4">{discount}%</div> : null}
      </div>
      <Link href={`/menu/${id}`} className="bg-header text-white block w-full text-center mt-5 py-1 rounded">See Details</Link>
    </div>
  );
};

export default Card;
