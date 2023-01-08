const Card = ({ id, heading, subheading, image }) => {
  return (
    <div
      key={id}
      className="flex flex-col md items-center p-8 w-80 text-center "
    >
      <img
        className="hover:animate-bounce"
        src={image}
        alt={`card_img-${id}`}
      />
      <h2 className="text-white font-semibold mb-1 mt-6 text-2xl">{heading}</h2>
      <p className="text-[#8A94A7] leading-7 text-lg">{subheading}.</p>
    </div>
  );
};
export default Card;
