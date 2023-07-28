import { Fragment } from "react";
import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router";

function EventsRootLayout() {
  return (
    <Fragment>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default EventsRootLayout;
