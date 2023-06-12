import { useState } from "react";
import { Header } from "./components/Header/Header";
import { List } from "./components/Lessons/LessonList";
import Meerkats from './config/meerkats.json'

export default function HomePage() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Meekats are cool" />
      <List />

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
