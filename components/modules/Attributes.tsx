import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";

const Attributes = () => {
  return (
    <div className="mt-[100px]">
      <h3 className="text-lg text-header my-6 font-extrabold">Why us?</h3>
      <div className="flex justify-between flex-wrap">
        <div className="shadow-lg flex flex-col items-center justify-center w-[150px] rounded text-center px-5 pt-6 pb-5 mt-5">
          <Fast />
          <p className="font-semibold mt-5">Fast</p>
        </div>
        <div className="shadow-lg flex flex-col items-center justify-center w-[150px] rounded text-center px-5 pt-6 pb-5 mt-5">
          <Food />
          <p className="font-semibold mt-5">Best Restaurants</p>
        </div>
        <div className="shadow-lg flex flex-col items-center justify-center w-[150px] rounded text-center px-5 pt-6 pb-5 mt-5">
          <Choice />
          <p className="font-semibold mt-5">Your Choice</p>
        </div>
        <div className="shadow-lg flex flex-col items-center justify-center w-[150px] rounded text-center px-5 pt-6 pb-5 mt-5">
          <Clock />
          <p className="font-semibold mt-5">24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;