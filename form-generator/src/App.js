import React, {Component} from 'react';
import ReportForm from './components/DynamicForm/form'
import './App.css';

class App extends Component {

  onSubmit = (model) => {
    console.log(JSON.stringify(model));
  }

  render(){
  return (
    <div className="App">
      <ReportForm className="form"
        title= "Police Brutality Report Form"
        model= {[
          {key: "name-of-officer", label: "What is the name of the officer in question?", props: {required: true}},
          {key: "date-of-incident", label: "When was the date of the incident?", type: "date", props: {required: true}},
          {key: "bribe", label: "How much is the bribe that was paid? (optional)", type: "number"},
        ]}
        onSubmit = {(model) => {this.onSubmit(model)}}
      />
        
    </div>
  );
  }
}


export default App;
