import { MenuProps, QueryState } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../modules/Card";

const CategoriesPage = ({ data }: MenuProps) => {
  const router = useRouter();

  const [query, setQuery] = useState<QueryState>({ difficulty: "", time: "" });

  useEffect(() => {
    const { difficulty, time } = router.query;

    const newDifficulty = difficulty ? String(difficulty) : "";
    const newTime = time ? String(time) : "";

    if (query.difficulty !== newDifficulty || query.time !== newTime) {
      setQuery({ difficulty: newDifficulty, time: newTime });
    }
  }, []);

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  const searchHandler = () => {
    if (!query.difficulty && !query.time) {
      alert("Please select a option");
      return;
    }
    const queryObj = Object.entries(query).reduce(
      (acc: { [key: string]: string }, [key, value]) => {
        if (value) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );

    router.push({
      pathname: "categories",
      query: queryObj,
    });
  };

  return (
    // Container
    <div className="p-3 sm:p-4 max-w-[900px] m-auto mt-24">
      <h2 className="border-b-4 border-header w-fit mb-12 text-3xl">
        Categories
      </h2>
      {/* Sub-Container */}
      <div>
        {/* Select */}
        <div className="flex flex-col sm:block">
          <select
            value={query.difficulty}
            onChange={changeHandler}
            name="difficulty"
            className="w-full mx-0 mt-0 mb-5 border-none sm:w-[150px] h-12 rounded-lg mr-3 p-3 text-[#48ac0a] shadow-md outline-none"
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <select
            value={query.time}
            onChange={changeHandler}
            name="time"
            className="w-full mx-0 mt-0 mb-5 border-none sm:w-[150px] h-12 rounded-lg mr-3 p-3 text-[#48ac0a] shadow-md outline-none"
          >
            <option value="">Cooking Time</option>
            <option value="less">{"< 30 Minutes"} </option>
            <option value="more">{"> 30 Minutes"}</option>
          </select>
          <button
            onClick={searchHandler}
            className="border-none bg-header text-white h-12 px-5 rounded-md cursor-pointer"
          >
            Search
          </button>
        </div>
        <div>
          {!data.length ? (
            <img src="/images/search.png" alt="category" />
          ) : null}
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
