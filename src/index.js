import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';


const App = () => {
  return <div className="o-container">
    <div 
      className="o-card o-card--light"
      draggable
    >
      <h1>Hello!</h1>
      <p>This is a light card</p>
    </div>
    <div 
      className="o-card o-card--dark"
      draggable
      onMouseUp={(e) => {
        console.log(e.target);
        e.target.style.transform = `translate(${e.target.clientX}, ${e.target.clientY})`
      }}
      onDragEnd={(e) => {
        // console.log(e.target.clientX);
        e.target.style.transform = `translate(${e.target.clientX}, ${e.target.clientY})`
      }}
    >
      <h1>Goodbye!</h1>
      <p>This is a dark card</p>
    </div>
  </div>
}

ReactDOM.render(<App />, document.getElementById('app'));