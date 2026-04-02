import "../app.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Temporal } from "@js-temporal/polyfill";
import TopNav from "../components/topNav";

type Exam = {
  datetime: Temporal.ZonedDateTime;
  duration: Temporal.Duration;
  paper_name: string;
};

export default function HomePage() {
  const [timetable, setTimetable] = useState<Exam[] | null>(null);
  const [nextExam, setNextExam] = useState<Exam | null>(null);
  const [lastExam, setLastExam] = useState<Exam>();


  useEffect(() => {
    fetch("/2026_al_tt.json")
      .then((res) => res.json())
      .then((data: any) => setTimetable(data["timetable"].map(e => ({
        datetime: Temporal.ZonedDateTime.from(e["datetime"]),
        duration: Temporal.Duration.from(e["duration"]),
        paper_name: e.paper_name
      }))));
  }, []);

  useEffect(() => {
    if (!timetable) return;

    const now = Temporal.Now.zonedDateTimeISO();

    const futureExams = timetable.filter(e => Temporal.ZonedDateTime.compare(e.datetime, now) > 0)

    if (futureExams.length > 0) {
      const nextExam = futureExams.reduce((earliest, exam) =>
        Temporal.ZonedDateTime.compare(exam.datetime, earliest.datetime) < 0
          ? exam
          : earliest
      );

      setNextExam(nextExam);
    }

    const lastExam = timetable.reduce((latest, exam) =>
      Temporal.ZonedDateTime.compare(exam.datetime, latest.datetime) > 0
        ? exam
        : latest
    );

    setLastExam(lastExam);

  }, [timetable]);

  return (
    <>
      <TopNav />
      <div className="homepage-container">
        <div className="homepage-contained">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span className="big-gradient">
              it should really be called simple
            </span>
          </motion.p>
        </div>
        <div className="homepage-contained">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {
              nextExam && (
                <>
                  <span className="big-gradient">
                    {Temporal.Now.zonedDateTimeISO().until(nextExam.datetime).round({ largestUnit: "days" }).days}
                  </span>
                  <span className="small">
                    &nbsp;
                    days until
                    &nbsp;
                  </span>
                  <br></br>
                  <span className="small gradient">
                    {nextExam.paper_name}
                  </span>
                </>
              )
            }
            <br></br>
            <br></br>
            {
              lastExam && (
                <>
                  <span className="big-gradient">
                    {Math.abs(Temporal.Now.zonedDateTimeISO().until(lastExam.datetime).round({ largestUnit: "days" }).days)}
                  </span>
                  {Temporal.ZonedDateTime.compare(Temporal.Now.zonedDateTimeISO(), lastExam.datetime) < 0 ?
                    (
                      <span className="small">
                        &nbsp;
                        days until
                        &nbsp;
                      </span>
                    ) : (
                      <span className="small">
                        &nbsp;
                        days since
                        &nbsp;
                      </span>
                    )
                  }
                  <br></br>
                  <span className="small gradient">
                    {lastExam.paper_name}
                  </span>
                </>
              )
            }
          </motion.p>
        </div>
        <div className="homepage-contained">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span className="medium">
              notes.
              <br />
              for A-level students.
              <br />
              physics and computer science.
            </span>
          </motion.p>
        </div>
      </div>
      <footer className="main-footer">
        <div>
          © 2025 Arthur L<br />
          Made with ❤︎ at 3am
        </div>
      </footer>
    </>
  );
}
