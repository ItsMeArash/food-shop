import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex">
      <div className="flex flex-col mt-3">
        <h2 className="border-b-2 border-green-500 w-fit my-5 font-bold">IMA Food</h2>
        <p className="font-semibold my-4">Food Delivery and Takeout!</p>
        <span className="text-gray-500 text-justify">
          IMA Food is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link href="/menu" className="bg-[#53c60b] text-white py-3 px-8 w-fit mt-8 rounded-lg">See All</Link>
      </div>
      <div className="">
        <img src="/images/banner.png" alt="Food image" className="w-[450px]"/>
      </div>
    </div>
  );
};

export default Banner;
