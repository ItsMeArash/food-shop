import DetailsPage from "@/components/templates/DetailsPage";
import { Context, FoodDetails, MenuItem } from "@/types";
import { useRouter } from "next/router";

const Details = ({ data }: FoodDetails) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading Page...</h2>;
  }
  return <DetailsPage data={data}/>;
};

export default Details;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data`);
  const json = await res.json();
  const data = json.slice(0, 10);

  const paths = data.map((item: MenuItem) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context: Context) {
  const {
    params: { id },
  } = context;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/${id}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}
