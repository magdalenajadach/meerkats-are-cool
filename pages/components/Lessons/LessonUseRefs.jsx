import { useRef } from 'react';

export default function LessonUseRefs() {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log(`You clicked ${ref.current} times`)
  }

  return <button onClick={handleClick}>Click the button {ref.current}</button>;
}

// React would never re-render the component, so you’d never see the count change! See how clicking this button does not update its text:

// Typically, you will use a ref when your component needs to “step outside” React and communicate with external APIs—often a browser API that won’t impact the appearance of the component. Here are a few of these rare situations:

// Storing timeout IDs
// Storing and manipulating DOM elements, which we cover on the next page
// Storing other objects that aren’t necessary to calculate the JSX.
// If your component needs to store some value, but it doesn’t impact the rendering logic, choose refs.