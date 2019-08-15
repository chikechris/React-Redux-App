import React, { useState } from "react";
import "semantic-ui-css";
import { Input, Button } from "semantic-ui-react";

export default function SearchForm(props) {
  const [initialFormState] = useState({
    drinkName: ""
  });
  const [formData, setFormData] = useState({
    drinkName: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fetchDrinks = e => {
    e.preventDefault();
    props.fetchDrinks(formData.drinkName);
    setFormData(initialFormState);
  };

  return (
    <div>
      <h2>Search Drinks By CockTail Name </h2>
      <form onSubmit={fetchDrinks}>
        <Input
          type="text"
          name="drinkName"
          placeholder="Enter a cocktail"
          onChange={handleChange}
          value={formData.drinkName}
          required
        />
        <Button color="blue">Search</Button>
      </form>
    </div>
  );
}
