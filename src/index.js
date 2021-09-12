// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Creating a react component
const App =()=>{
    return(
        <div>
            <label className="lable" htmlFor="lable">Enter Your Name: </label>
            <input type="text" id="lable"></input>
            <button style={{backgroundColor:'blue', color:'white'}}>Submit</button>
        </div>
    );
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.getElementById('root'));