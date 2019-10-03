import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = (props: any) => {

  const handleApiRequest: React.EventHandler<React.MouseEvent<HTMLButtonElement>> = (e) => {
    console.log("handler is working");
    window.fetch('http://localhost:5001/api/values', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  return (
    <div>
      <h1>Welcome to React w/ TypeScript Template</h1>
      <p>enable dynamic update with container using bind mount</p>
      <p>please hot reloading, work</p>
      <button onClick={handleApiRequest}>ClickMe</button>
    </div>
  );
};

ReactDOM.render(
  <App />
  , document.getElementById('root')
)
