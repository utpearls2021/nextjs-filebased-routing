import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";
import { Fragment } from "react";

export default function HomePage() {
  const items = getFeaturedEvents();
  return(
    <Fragment>
        <EventList items={items}/>
    </Fragment>
  );
}