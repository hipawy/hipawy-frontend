import React, { Component } from "react";
import provinces from "./data";

class RegionSelect extends Component {
  state = {
    data: null,
    province: "",
    city: ""
  };

  componentDidMount() {
    this.setState({ data: provinces });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { data, ...state } = this.state;

    console.log(state);
  };

  render() {
    const { data, province, city } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <select name="province" onChange={this.handleChange} value={province}>
          <option disabled value="">
            Province
          </option>
          {data &&
            Object.keys(data).map((province, i) => (
              <option value={province} key={i}>
                {province}
              </option>
            ))}
        </select>

        <select name="city" onChange={this.handleChange} value={city}>
          <option disabled value="">
            City
          </option>
          {province !== "" &&
            data[province].map((city, i) => (
              <option value={city} key={i}>
                {city}
              </option>
            ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RegionSelect;
