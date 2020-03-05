import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {clickButton} from './actions';
import {bindActionCreators} from 'redux';

class App extends Component{

  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render(){
    const {
      clickButton, //mapDispatchToProps
      newValue //mapStateToProps
    } = this.props;


    // const { newValue } = this.props; // antes dos maps

    return(
      <div className="App" style={{ paddingTop: '10px'}}>
        <input 
        onChange={this.inputChange}
        type='text'
        value={this.state.inputValue}
         />
        <button onClick={() => clickButton(this.state.inputValue)}>
          Click me!
        </button>
        <h1>{newValue}</h1>

      </div>
    );
  }
}
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch => 
bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
