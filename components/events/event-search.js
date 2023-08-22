import Button from "../ui/button";
import classes from "../../styles/events-search.module.css";
import { useRef } from "react";

export default function EventSearch(props) {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const yearRef = useRef();
  const monthRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const yearValue = yearRef.current.value;
    const monthValue = monthRef.current.value;

    props.onSearch(yearValue, monthValue);
  }

  return <form className={classes.form} onSubmit={submitHandler}>
    <div className={classes.controls}>
      <div className={classes.control}>
        <label htmlFor="year">Year</label>
        <select id="year" ref={yearRef}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className={classes.control}>
        <label htmlFor="month">Month</label>
        <select id="month" ref={monthRef}>
          {month.map((month, index) => <option key={index} value={index + 1}>{month}</option>)}
        </select>
      </div>
    </div>
    <Button>Filter</Button>
  </form>
}