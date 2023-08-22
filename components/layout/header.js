import Link from "next/link";
import { Fragment } from "react";
import classes from "../../styles/main-header.module.css";

export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href="/">Next Filebased Event</Link>
        </div>
        <nav className={classes.navigation}>
          <ul>
            <li><Link href="/events">All events</Link></li>
          </ul>
        </nav>
      </header>
    </Fragment>
  )
}