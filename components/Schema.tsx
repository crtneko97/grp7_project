import React from "react"
import moment from "moment"
import Moment from "react-moment"
import "moment/locale/sv";
//import styles from "@/styles/WeekDays.module.css"
import styles from "@/styles/Home.module.css"
import { Task } from "@/types/Task"
import { useState } from "react"
import Head from "next/head"
import CreateTaskDB from "./CreateTasksDB"
import TaskList from "./TaskListDB"
interface SchemaProps {}

const Schema: React.FC<SchemaProps> = () => {
  const startOfMonth = moment().startOf("month")
  const endOfMonth = moment().endOf("month")

  const endOfWeek = moment().endOf("week")
  const startOfWeek = moment().startOf("week")

  moment.locale("sv");

  //Usestate testing

  //header month year

  const date = new Date()
  const monthNames = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
  ]
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  const thisMonth = monthNames[monthIndex]
  const thisYear = year

  const daysWeek: string[] = []
  let currentDayWeek = startOfWeek
  //While loops to print out all 7 days from the current week
  while (currentDayWeek <= endOfWeek) {
    daysWeek.push(currentDayWeek.format("DD"))
    currentDayWeek = currentDayWeek.clone().add(1, "day")
  }

  const daysMonth: string[] = []
  let currentDayMonth = startOfMonth
  //While loops to print out all days in the current month
  while (currentDayMonth <= endOfMonth) {
    daysMonth.push(currentDayMonth.format("DD"))
    currentDayMonth = currentDayMonth.clone().add(1, "day")
  }

  // Get the current date then setting  it to a variable 'currentDate'
  const currentDate = moment()

  // Current day in the middle of [7] and display current day change it to orange background later
  const weekDays: moment.Moment[] = Array.from({ length: 7 }, (_, i) =>
    moment(currentDate).add(i - 3, "day")
  )

  /* onClick Manual-Time-PopUp meny */
  /*
  const [isHidden, setIsHidden] = useState(true)

  function toggleManuellTime() {
    setIsHidden(!isHidden)
  }
  */

  return (
    <>
      {/* head */}
      <Head>
        <title>Peppi Schema</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Topp style med månad År */}
      <div className={styles.topSchema}>
        <div className={styles.boxDate}>
          <div>
            {thisMonth}
            <span className={styles.bigDate}> {thisYear}</span>
          </div>
        </div>
        <br />
        {/* Veckodagarna */}
        <div className={styles.veckoTopp}>
          {weekDays.map((day: moment.Moment) => (
            <div key={day.format("YYYY-MM-DD")}>
              <ul className={styles.horizontal}>
                <li>
                  {day.isSame(currentDate, "day")}
                  <Moment format="ddd D" className={styles.hilightDay}>
                    {day}
                  </Moment>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Kalender vy där task läggs till */}
      <div className={styles.boardSchema}>
        <div className={styles.vl}></div>
      </div>
    </>
  )
}

export default Schema

/*

  const startOfYear = moment().startOf("year")
  const endOfYear = moment().endOf("year")

  const nextMonth = moment().add(1, "month")
  const previousMonth = moment().add(-1, "month")

   {weekDays.map((day: moment.Moment) => (
        <div key={day.format('YYYY-MM-DD')}>
                    {day.isSame(currentDate, 'day') && <span>Current day:&nbsp;</span>}
          <Moment format="ddd, MMM D">{day}</Moment>
        </div>
      ))}
  //Console log on daysweek (7) and months (30) <ish>
  //console.log(daysWeek);
  //console.log(daysMonth);
  //Console log on weeks
  console.log('start of week', startOfWeek.format('YYYY-MM-DD'));
  console.log('end of week', endOfWeek.format('YYYY-MM-DD'));
  
  //Console log on months
  console.log('start of month', startOfMonth.format('YYYY-MM-DD'));
  console.log('end of month', endOfMonth.format('YYYY-MM-DD'));
  console.log('next month', nextMonth.format('YYYY-MM-DD'));
  console.log('previous month', previousMonth.format('YYYY-MM-DD'));
  
  //Console log on years
  console.log('start of year', startOfYear.format('YYYY-MM-DD'));
  console.log('end of year', endOfYear.format('YYYY-MM-DD'));
*/
