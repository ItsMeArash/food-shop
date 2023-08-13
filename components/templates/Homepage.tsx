import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import Companies from "../modules/Companies";
import Definition from "../modules/Definition";
import Guide from "../modules/Guide";
import Instruction from "../modules/Instruction";

const Homepage = () => {
  return (
    <div className="max-w-[900px] m-auto mt-[100px] sm:p-3 md:p-5">
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
    </div>
  );
};

export default Homepage;
