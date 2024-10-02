import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styles from '../../styles/styles'
import EventCard from "./EventCard";

const Events = () => {
  const { eventproduct, loading } = useSelector((state) => state.events);
console.log(eventproduct,'sunny');
  return (
    <div>
      {
        !loading && (
          <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
              <h1>Popular Events</h1>
            </div>

            <div className="w-full grid">
              {
                eventproduct.length !== 0 && (
                  <EventCard data={eventproduct && eventproduct} />
                )
              }
              <h4>{
                eventproduct?.length === 0 && (
                  'No Events have!'
                )
              }

              </h4>
            </div>

          </div>
        )
      }
    </div>
  )
}

export default Events