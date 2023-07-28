import { Fragment } from "react";
import { useParams } from "react-router";

function EventDetailPage() {
  const params = useParams();

  return (
    <Fragment>
      <h1>EVENT DETAIL PAGE</h1>
      <p>{params.eventId}</p>
    </Fragment>
  );
}

export default EventDetailPage;
