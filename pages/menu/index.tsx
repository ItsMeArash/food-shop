import MenuPage from "@/components/templates/MenuPage";
import { MenuProps } from "@/types";



const Menu = ({ data }: MenuProps) => {
  return (
    <div>
      <MenuPage data={data}/>
    </div>
  );
};
export default Menu;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/data");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60 * 60
  }
}