import { useState } from "react";

export default function LessonUseState() {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }
  return <button onClick={handleClick}>Click the button. Clicks {clicks}</button>
}

