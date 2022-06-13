import React, { useState, useContext, useEffect } from "react";
import Modal from "../..";
import { UserContext } from "../../UserContext";
import EventList from "../../components/Events/EventList.tsx";
import "./home.css";
import { ReactNode } from "react";

const Home = () => {
  //user data, still have to add api though
  const [{ user_name, user_tags, jwt_token }, setData] =
    useContext(UserContext);
  const [events, setEvents] = useState<any[]>([]);

  const getEventForTag = (tag: string) => {
    let headers: any = { "X-Mx-ReqToken": jwt_token };
    return fetch(
      `http://localhost:4000/api/event/tag/contains/any?tags[]=${tag}`,
      {
        headers,
      }
    );
  };

  useEffect(() => {
    [
      "soccer",
      "basketball",
      "sports",
      "death",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ].map((tag) => {
      return getEventForTag(tag).then((res) => {
        res.json().then(({ events: api_events }) => {
          console.log("FROM API", api_events);
          setEvents([...events, { events: api_events, tag: tag }]);
        });
      });
    });
  }, []);

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <>
      <div className="greeting-header m-4">Welcome {user_name}</div>
      <div>
        {events.map((event_list, index: number): ReactNode => {
          return (
            <div className="gathering-list">
              <EventList
                events={event_list.events}
                tag={event_list.tag}
                key={index}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
