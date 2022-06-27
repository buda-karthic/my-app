import "./Card.scss";

function Card(props) {
  return <div className={props.className + " card"}>{props.children}</div>;
}

export default Card;
