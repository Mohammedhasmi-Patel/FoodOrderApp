import React, { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";

async function getData() {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const jsonData = await data.json();
  return jsonData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setRestaurants(data?.data?.cards);
      console.log(...data?.data?.cards);
    };
    fetchData();
  }, []);

  return (
    <div>
      {restaurants.map((item) => {
        <h1>item?.cards?.cards?.id</h1>;
      })}
    </div>
  );
};

export default Body;
