export function List() {
  const meerkats = ["Ada Lovelace meerkat", "Grace Hopper meerkat", "Margaret Hamilton meerkat"];

  return (
    <>
      <ul>
        {meerkats.map((meerkat) => (
          <li key={meerkat}>{meerkat}</li>
        ))}
      </ul>
    </>
  );
}
