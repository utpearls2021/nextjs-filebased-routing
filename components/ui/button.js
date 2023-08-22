import Link from "next/link";
import classes from "../../styles/button.module.css";

export default function Button(props) {
  if (props.link) {
    return <Link className={ classes.btn } href={ props.link }>{ props.children }</Link>
  } else {
    return <button className={ classes.btn } onClick={props.onClick}>{ props.children }</button>
  }
}