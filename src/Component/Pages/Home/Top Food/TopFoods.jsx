import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router-dom";

const TopFoods = () => {
  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    fetch("topselling.json")
      .then((res) => res.json())
      .then((data) => setTopFoods(data));
  }, []);

  return (
    <div className=" bg-[#fffafa]">
      <h6 className=" pt-20 text-lg font-semibold tracking-widest text-[#fb5849] text-center">
        OUR TOP SELLING FOOD
      </h6>
      <h2 className=" text-3xl font-black mt-5 text-center">
        Our selection of cakes <br />
        with quality taste
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 w-5/6 gap-6 mx-auto gap-6q mt-20 pl-10">
        {topFoods.map((topFood) => (
          <TopFoodCard key={topFood.id} topFood={topFood}></TopFoodCard>
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <Link to='allfooditems'>
        <button className=" font-poppins text-base font-semibold text-red-500 mt-5 px-5 py-2 rounded bg-white border border-red-700 ">
          See All
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
