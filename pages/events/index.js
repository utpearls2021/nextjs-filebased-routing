import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data";
import { Fragment } from "react";
import { useRouter } from "next/router";

export default function AllEvents() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    router.push({
      pathname: "/events/[...slug]",
      query: { slug:[ year,month ]}
    })
  }

  return(
    <Fragment>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events}/>
    </Fragment>
  );
}
