export const InterestCard = (props) => {
  console.log(props);
  return (
    <div className="interest-card">
      <img src={props.image} alt="" />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
    </div>
  );
};
