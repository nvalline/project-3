import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
import { EventsContext } from "../utils/EventsContext";
import axios from "axios";
import API from "../utils/API";
import Symptoms from "../components/Symptoms";
import moment from "moment-timezone";
import IDB from "../utils/IDB";

function Home() {
  const [stateData, setStateData] = useState({});
  const [userEmail, setUserEmail] = useState();
  const [authState] = useContext(AuthContext);
  const [userState, setUserState] = useState();
  const [userCounty, setUserCounty] = useState();
  const [events, setEvents] = useContext(EventsContext);

  // console.log("NAVIGATOR:", navigator)

  useEffect(() => {
    API.getUser(authState.userId)
      .then(res => {
        let county = res.data.county;
        setUserCounty(county);

        let email = res.data.email;
        setUserEmail(email);

        setUserState(res.data.state);
        let state = res.data.state.toLowerCase();
        axios.get(`/api/current/${state}`)
          .then(res2 => {
            setStateData(res2.data);
            getEvents();
          })
      })
      .catch(err => console.log(err));

    function getEvents() {
      if (events !== undefined && events.length > 0) {
        // console.log("HOME EVENTS:", events)
      } else {
        API.getEventsByUser(authState.userId)
          .then(res => {
            setEvents(res.data);
            IDB.updateIDB(res.data);
          })
          .catch(err => console.log(err));
      }
    }

  }, [authState.userId, events])



  return (
    <div className="">
      <div className="row user-info">
        <div className="col icon">
          <span><i className="fa fa-user-circle-o"></i> {userEmail}
          </span>
        </div>
        <div className="col icon">
          <span><i className="fa fa-map-marker"></i> {userState} / {userCounty} County
        </span>
        </div>
      </div>
      <div className="sections">
        <div className="row">
          {/* Trend */}
          <div id="trend" className="col section">
            <h4 className="section-title">Current Trend</h4>
          </div>
          {/* Cases */}
          <div id="cases" className="col section">
            <h4 className="section-title">Positive Cases</h4>
            <div className="row">
              <div className="col">
                <p>New</p>
                <p className="data-result">{stateData.positiveIncrease}</p>
              </div>
              <div className="col">
                <p>Total</p>
                <p className="data-result">{stateData.positive === undefined ? "N/A" : stateData.positive.toLocaleString()}</p>
              </div>
            </div>
            <p>{userCounty} County: (Get County Data)</p>
          </div>
        </div>

        <div className="row">
          {/* Symptoms */}
          <div id="symptoms" className="col section">
            <h4 className="section-title">Symptoms</h4>
            <div className="text-left">
              <Symptoms />
            </div>
          </div>
          {/* Events */}
          <div id="events" className="col section">
            <h4 className="section-title">Watched Events</h4>
            {
              !events || events.length === 0
                ? (
                  <div className="text-center mb-5">
                    <p>No events added yet.</p>
                  </div>
                )
                : (
                  events.map(event => (
                    <div className="dash-event" key={event.title}>
                      <Link to="/events"><p className="dash-event-title" style={{ color: "black" }}>{event.title}</p></Link>
                      <p className="dash-event-date">{moment(event.date).calendar()}</p>
                    </div>
                  ))
                )
            }
            <Link to="/new" className="btn btn-primary mb-3">
              + Add A New Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
