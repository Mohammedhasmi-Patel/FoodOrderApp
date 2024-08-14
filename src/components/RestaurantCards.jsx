const RestaurantCards = ({ item }) => {
  return (
    <div className="h-52 w-72 bg-white shadow-2xl  m-10 rounded-md border border-width: 2px border-black ">
      <img className="h-1/2 w-full mb-3" src={item.img} alt="Food image" />
      <h1 className="text-center">{item.name}</h1>
      <h2 className="text-center">{item.price}</h2>
      <h3 className="text-center">{item.rating}</h3>
    </div>
  );
};

export default RestaurantCards;
