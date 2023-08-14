import { Context, FoodDetails, MenuItem } from "@/types";
import { useRouter } from "next/router";

const Details = ({ data }: FoodDetails) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading Page...</h2>;
  }
  return <div>Details</div>;
};

export default Details;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3001/data");
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
  const res = await fetch(`http://localhost:3001/data/${id}`);
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
