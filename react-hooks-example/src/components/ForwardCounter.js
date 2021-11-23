import useCounter from "../hooks/use-counter"

import Card from './Card';

const ForwardCounter = () => {
  // The state will be tied to Forward Counter. Just the logic is shared
  // NOT the state
  const counter = useCounter(true)
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
