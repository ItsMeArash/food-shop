import CategoriesPage from "@/components/templates/CategoriesPage";
import { MenuItem, MenuProps } from "@/types";
import { GetServerSidePropsContext } from 'next';
import { Context } from "vm";


const Categories = ({ data }: MenuProps) => {
  return <CategoriesPage data={data} />;
};

export default Categories;

export async function getServerSideProps(context: GetServerSidePropsContext<Context>) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data`);
  const data = await res.json();

  const filteredData = data.filter((item: MenuItem) => {
    const difficultyResult = item.details.filter(
      (detail: { [key: string]: string }) =>
        detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeResult = item.details.filter(
      (detail: { [key: string]: string }) => {
        const cookingTime = detail["Cooking Time"] || "";
        const [timeDetail] = cookingTime.split(" ");
        if (time === "less" && timeDetail && +timeDetail <= 30) {
          return detail;
        } else if (time === "more" && +timeDetail > 30) {
          return detail;
        }
      }
    );
    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResult.length) {
      return item;
    }
  });
  return {
    props: { data: filteredData },
  };
}
