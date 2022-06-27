import "./ExpensesDate.scss";

function ExpensesDate(props) {
  return (
    <h2>
      <span>{props.date.toLocaleString("en-US", { month: "long" })}</span>
      <span>{props.date.toLocaleString("en-US", { day: "2-digit" })}</span>
      <span>{props.date.getFullYear()}</span>
    </h2>
  );
}

export default ExpensesDate;
