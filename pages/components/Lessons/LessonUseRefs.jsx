import { useRef, useState } from 'react';

export default function LessonUseRefs() {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log(`You clicked ${ref.current} times`)
  }

  return <button onClick={handleClick}>Click the button {ref.current}</button>;
}