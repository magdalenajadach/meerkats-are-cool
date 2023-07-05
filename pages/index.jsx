import Header from "./components/Header/Header";
import List from "./components/Lessons/LessonList";
import LessonUseRefs from "./components/Lessons/LessonUseRefs";
import LessonUseState from "./components/Lessons/LessonUseState";
import { meerkats } from "./config/meerkats";
import Card from "./components/Card/Card";
import Toggle from "./components/Lessons/Toggle";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <LessonUseRefs />
      <LessonUseState />
      <Header title="Meekats are cool" />
      <Link href="/about">Link to a new page</Link>
      <Toggle />
      <Link href="/Stopwatch">Stopwatch link</Link>
      <List />
      <div className="card-wrapper"></div>
      <Card meerkats={meerkats} />
    </div>
  );
}
