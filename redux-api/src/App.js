import React from "react";
import "./App.css";

import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Container from "./components/Container";
import Loader from "react-loader-spinner";

import { fetchDrinks } from "./actions";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const {
      fetchDrinks,

      isFetching,
      drinks
    } = this.props;
    return (
      <div className="App">
        <Header />
        <SearchForm fetchDrinks={fetchDrinks} />
        {isFetching ? (
          <Loader type="Circle" color="blue" width={100} height={100} />
        ) : (
          <Container drinks={drinks} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("State:", state);
  return {
    drinks: state.drinks,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchDrinks }
)(App);
