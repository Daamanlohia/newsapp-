import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    searchTerm: "",
    startYear: "",
    endYear: ""
  };

  handleSearchKeyPress = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleStartYrKeyPress = event => {
    const year = event.target.value;
   const startDate = year + "0101";
    this.setState({
      startYear: startDate
    })
  }

  handleEndYrKeyPress = event => {
    const year = event.target.value;
    const startDate = year + "1231";
    this.setState({
      endYear: startDate
    })
  }

  handleSubmit = (event, searchTerm, start, end) => {
    event.preventDefault();
    this.props.callApi(searchTerm, start, end);
  }


  render() {
    return (
      <div className="container">
      <form className="formStyle">
        <div className="row">
      
        <input
          className="inputStyle"
          type="text"
          placeholder="Search Term(Required)"
          onKeyPress={(event)=>this.handleSearchKeyPress(event)
          }
        /> 
        
        <input
          className="inputStyle"
          type="text"
          maxLength="4"
          placeholder="Start Year (Optional) YYYY"
          onKeyPress={(event)=>this.handleStartYrKeyPress(event)}
        />
       
          <input
          className="inputStyle"
          type="text"
          maxLength="4"
          placeholder="End Year (Optional) YYYY"
          onKeyPress={(event)=>this.handleEndYrKeyPress(event)}
        />
       
        <button className="btn btn-secondary inputStyle" onClick={(event)=>this.handleSubmit(event, this.state.searchTerm)}>Search Articles</button>
        </div>
       
      </form>
      
      </div>
    );
  }
}

export default Form;
