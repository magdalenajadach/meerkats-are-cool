export default function Card ({ meerkats }) {
  return (
    <div className="">
      {meerkats.map((meerkat) => {
        return (
          <div>
            <h2>{meerkat.title}</h2>
            <p>{meerkat.description}</p>
            <img alt="meerkat" src={meerkat.image} />
          </div>
        );
      })}
    </div>
  );
};
