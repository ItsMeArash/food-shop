import Link from "next/link";

const Guide = () => {
  return (
    <div className="flex justify-between mb-[100px]">
      <Link className="py-3 px-5 shadow-md md:py-4 md:px-12 rounded cursor-pointer" href="/menu">Menu</Link>
      <Link className="py-3 px-5 shadow-md md:py-4 md:px-12 rounded cursor-pointer" href="/categories">Categories</Link>
      <Link className="py-3 px-5 shadow-md md:py-4 md:px-12 rounded cursor-pointer" href="/">Discount</Link>
    </div>
  );
}

export default Guide;