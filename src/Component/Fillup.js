import React, { useState } from "react";
import "./expenses.scss";
import ExpensesDate from "./ExpensesDate";
import Card from "./Card";

function Fillup(props) {
  const [title, setTitle] = useState(props.title);

  function btn() {
    setTitle("Services");
    console.log(title);
  }

  return (
    <div>
      <Card className="myexpenses">
        <ExpensesDate date={props.date} />
        <p>{title}</p>
        <div className="price">{props.amount}</div>
        <button onClick={btn}>Change</button>
      </Card>
    </div>
  );
}

export default Fillup;
