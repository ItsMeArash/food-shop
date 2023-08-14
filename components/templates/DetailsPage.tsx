import { FoodDetails } from "@/types";
import Location from "@/components/icons/Location";
import Dollar from "../icons/Dollar";

const DetailsPage = ({ data }: FoodDetails) => {
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = data;

  return (
    // container
    <div className="max-w-[900px] m-auto mt-24 p-3 sm:p-5">
      <h2 className="border-b-2 border-header w-fit mb-12 text-2xl">Details</h2>
      {/* sub-container */}
      <div>
        {/* banner */}
        <div className="flex flex-col sm:flex-row">
          <img
            src={`/images/${id}.jpeg`}
            alt={name}
            className="w-full mb-5 sm:w-[300px] rounded-lg"
          />
          <div className="m-0 sm:ml-8">
            <h3 className="text-xl text-header">{name}</h3>
            {/* location */}
            <span className="flex items-center text-gray-500 mt-5 mb-10">
              <Location />
              {details[0].Cuisine}
            </span>
            {/* price */}
            <span className="flex items-center">
              <Dollar />
              {discount ? (price * (100 - discount)) / 100 : price}$
            </span>
            {/* discount */}
            {discount ? (
              <span className="bg-[#ed4133] text-white py-3 flex justify-center rounded mt-5">
                {discount}% Off
              </span>
            ) : null}
          </div>
        </div>
        {/* introduction */}
        <div className="my-16 leading-6 text-justify">
          <p>{introduction}</p>
        </div>
        {/* details */}
        <div className="mb-15">
          <h4 className="text-2xl text-header my-6">Details</h4>
          <ul>
            {details.map((item, index) => (
              <li key={index} className="flex items-center my-3">
                <p className="text-lg font-semibold mx-3">
                  {Object.keys(item)[0]}:{" "}
                </p>
                <span className="text-gray-500">{Object.values(item)[0]}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* details */}
        <div className="mb-15">
          <h4 className="text-2xl text-header my-6">Ingredients</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index} className="flex items-center my-3">
                <p className="text-lg font-semibold mx-3">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* recipe */}
        <div className="mb-24">
          <h4 className="text-2xl text-header my-6">Recipe</h4>
          {recipe.map((item, index) => (
            <div
              key={index}
              className={`flex items-center py-5 px-3 text-justify ${
                index % 2 ? "bg-[#e8ffdb]" : "bg-[#bcff93]"
              }`}
            >
              <span className="text-4xl mr-4 ml-1">{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
