import { Fragment } from "react";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";

export default function SingleEvent() {
  const router = useRouter();
  const item = getEventById(router.query.id);
  console.log("Event",item);

  return(
    <Fragment>
      <EventSummary title={item.title}/>
      <EventLogistics date={item.date} address={item.location} image={item.image} imageAlt={item.title}/>
      <EventContent>
          <p>{item.description}</p>
      </EventContent>
    </Fragment>
  );
}