import React from 'react';
import ReactDOM from 'react-dom';
import Yellow from './Yellow';
import Red from './Red';
import Blue from './Blue';
import './index.css';

const App = () => {
  return (
    <div>
      <Yellow/>
      <Red/>
      <Blue/>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root')) 