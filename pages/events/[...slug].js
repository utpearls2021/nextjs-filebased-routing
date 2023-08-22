import { Fragment } from "react";
import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

export default function SearchEvents() {
  const router = useRouter();
  const [ year, month ] = router.query.slug;
  let eventsList = [];

  if (isNaN(year) || isNaN(month)) {
    eventsList = []
  } else {
    const events = getFilteredEvents({ year: year, month: month });
    if (!events) {
      eventsList = []
    } else {
      eventsList = events;
    }
  }

  function findEventsHandler(year, month) {
    router.push({
      pathname: "/events/[...slug]",
      query: { slug:[ year, month ]}
    })
  }

  return(
    <Fragment>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={eventsList}/>
    </Fragment>
  );
}