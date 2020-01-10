import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { sum, add } from './test.rs'

const jsSum = (x: Number) => {
  let sum = 0;
  for (var i = 0; i < x; i++) {
    sum += i;
  }
  return sum;
}

interface AppProps {
  name: String
}

const App = ({
  name
}: AppProps) => {
  const [num, setNum] = useState(0)
  const [jsSumVal, setJsSum] = useState(0)
  const [rustSumVal, setRustSum] = useState(0)
  const [jsMark, setJsMark] = useState(0);
  const [rustMark, setRustMark] = useState(0);

  useEffect(() => {
    const jsMark = "js" + Date.now();
    const rustMark = "js" + Date.now();
    console.log(jsMark);

    performance.mark(jsMark);
    setJsSum(jsSum(num));
    setJsMark(performance.measure("jsjs", jsMark))

    performance.mark(rustMark)
    setRustSum(sum(num));
    setRustMark(performance.measure("rustrust", rustMark));


  }, [num]);

  return (add ? (<div>
    <input type="number" onChange={(e) => setNum(parseInt(e.target.value))} /><br></br>
    js Mark: {jsMark.duration}   <br></br>
    Rust Mark: {rustMark.duration}   <br></br>
    {jsSumVal}<br></br>
    {rustSumVal}<br></br>
  </div>) : (<div>loading...</div>))
  // return <div>Hello world</div>
}


ReactDom.render(<App name="matt" />, document.getElementById('app'))
