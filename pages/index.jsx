import Header from "./components/Header/Header";
import List from "./components/Lessons/LessonList";
import LessonUseRefs from "./components/Lessons/LessonUseRefs";
import LessonUseState from "./components/Lessons/LessonUseState";
import Meerkats from "./config/meerkats.json";
import Card from "./components/Card/Card";
import Stopwatch from "./components/Lessons/Stopwatch"
import Toggle from "./components/Lessons/Toggle";

export default function HomePage() {
  return (
    <div>
      <LessonUseRefs />
      <LessonUseState />
      <Header title="Meekats are cool" />
      <Stopwatch />
      <Toggle />
      <List />
      <div className="card-wrapper"></div>
      <Card meerkats={Meerkats.meerkats} />
    </div>
  );
}
