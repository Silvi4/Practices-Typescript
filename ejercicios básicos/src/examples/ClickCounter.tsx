import React, { useEffect } from 'react';
import { useCounter } from '../Hooks/useCounter';

 
interface IProps {
  initial: number;
}
 
export const ClickCounter: React.FC<IProps> = (props) => {
  const { value, previous, next} = useCounter(props.initial);

  const onPrevious = () => {
    previous();
  }

  const onNext = () => {
    next();
  }
 
  useEffect(() => {
    document.title = value.toString();
  },[value]);


const isMaxValue = value === 5;
const isMinValue = value === -5;
  return (
    <>
      <button onClick={onPrevious} disabled={isMinValue}>Previous</button>
      {value}
      <button onClick={onNext} disabled={isMaxValue}>Next</button>
    </>
  );

};