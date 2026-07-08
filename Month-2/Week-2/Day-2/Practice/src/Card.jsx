function Card({ product }) {
  return (
    <div className="w-[250px]  p-4 shadow-2xl rounded-lg hover:scale-105 transition-all duration-500">
      <div className=" w-full flex justify-center">
        <img src={product.img} alt={product.title} className="h-30 w-30 rounded-full" />
      </div>
      <p className="text-center font-bold text-gray-700">
        {product.title}
      </p>
      <p className="text-gray-500">{product.desc}</p>
      <button className="p-3 w-full bg-purple-500 rounded-xl mt-2 text-white font-bold hover:bg-purple-400 cursor-pointer">
        View Page
      </button>
    </div>
  );
}

export default Card;
