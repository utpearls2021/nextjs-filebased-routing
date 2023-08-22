import { Fragment } from "react";
import EventItem from "./event";
import classes from "../../styles/event-list.module.css";
export default function EventList(props) {
  const { items } = props;
  return (
    <Fragment>
      {
        items && items.length ? <ul className={classes.list}>{ items.map((item) => <EventItem key={ item.id } item={ item }/>) }</ul> : <p className="center">No events found</p>
      }

    </Fragment>
  )
}