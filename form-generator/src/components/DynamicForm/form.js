import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import "./form.css";
import "uikit/dist/css/uikit.min.css"

export default class ReportForm extends Component {
  // state = {

  // }
  // constructor(props){
  //     super(props)
  // }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) this.props.onSubmit(this.state);
  };

  onChange = (e, key) => {
    this.setState({
      [key]: this[key].value,
    });
  };

  renderForm = () => {
    let model = this.props.model;

    let formUI = model.map((m) => {
      let key = m.key;
      let type = m.type || "text";
      let props = m.props || {};

      return (
        <div key={key} className="form-group">
          <form>
            <label className="form-label .uk-text-left" key={"1" + m.key} htmlFor={m.key}>
              {m.label}
            </label>
            <br></br>
            <div className="uk-margin">
            <input className="uk-input form-input"
              {...props}
              ref={(key) => {
                this[m.key] = key;
              }}
              type={type}
              key={"i" + m.key}
              onChange={(e) => {
                this.onChange(e, key);
              }}
            ></input>
            </div>
           
          </form>
        </div>
      );
    });
    return formUI;
  };

  render() {
    let title = this.props.title || "Police Brutality Form";
    return (
      <div className={this.props.className}>
        <h1 className="form-header">{title}</h1>
        <form
          className="report-form"
          onSubmit={(e) => {
            this.onSubmit(e);
          }}
        >
          {this.renderForm()}
          <div className="form-group">
            <button className="uk-button uk-button-default" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
