import Link from "next/link";
import { Fragment } from "react";
import classes from "../../styles/event-item.module.css";
import Button from "../ui/button";
import Address from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right";

export default function EventItem(props) {
  const { item } = props;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const humanReadableDate = new Date(item.date).toLocaleDateString("en-US", options);
  const exploreLink = `/events/${item.id}`;

  return(
    <Fragment>
      <li className={ classes.item }>
        <img src={"/" + item.image } alt={ item.tite } />
        <div className={ classes.content }>
          <div className={ classes.summary }>
            <h2>{ item.title }</h2>
            <div className={ classes.date }>
              <DateIcon/>
              <time>{ humanReadableDate }</time>
            </div>
            <div className={classes.address}>
              <Address/>
              <address>{ item.location }</address>
            </div>
          </div>
          <div className={ classes.actions }>
            <Button link={ exploreLink }>Explore event <span className={ classes.icon }><ArrowRightIcon/></span> </Button>
          </div>
        </div>
    </li>
    </Fragment>
  )
}
