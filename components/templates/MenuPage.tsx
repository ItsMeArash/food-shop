import { MenuProps } from "@/types";
import Card from "../modules/Card";

const MenuPage = ({ data }: MenuProps) => {
  return (
    <div className="p-3 sm:p-5 max-w-[900px] m-auto mt-[100px]">
      <h2 className="w-fit mb-[50px] text-2xl border-b-4 border-header">Menu</h2>

      <div className="flex flex-wrap justify-around md:justify-between">
        {data.map((item) => (
          <Card key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
