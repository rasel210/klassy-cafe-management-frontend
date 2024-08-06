

const TopFoodCard = ({topFood}) => {

  const {title, img, category, Price} = topFood;

  return (
    <div className="card bg-white w-80 shadow-xl px-5 py-5">
      <figure>
        <img className="w-full h-60"
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body text-[#fb5849]">
        <h2 className="card-title">{title}</h2>
        <h3>Food Category: {category}</h3>
        <h3>${Price}</h3>
        
      </div>
    </div>
  );
};

export default TopFoodCard;
