import { useState } from "react";
import { FoodData } from "../../constants";
import RestaurantCards from "./RestaurantCards";

const Body = () => {
  const [userInput, setUserInput] = useState("");
  const [filterData, setFilterData] = useState(FoodData);

  function filterItems(filterData, userInput) {
    const filterValue = filterData.filter((items) => {
      return items.name.includes(userInput);
    });
    setFilterData(filterValue);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search Item Here"
          className="w-72 h-12 border border-black text-center"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          className="p-5 rounded-lg m-5 bg-green-400 text-white "
          onClick={() => filterItems(filterData, userInput)}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterData.map((item) => {
          return <RestaurantCards item={item} />;
        })}
      </div>
    </>
  );
};

export default Body;
