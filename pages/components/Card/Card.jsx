export const Card = ({ pathways }) => {
  return (
    <div className="">
      {pathways.map((pathway) => {
        return (<div>
          <h2>{pathway.title}</h2>
          <p>{pathway.description}</p>
          <img alt="meerkat" src={pathway.image} />
        </div>)
        
      })}
    </div>
  );
};

