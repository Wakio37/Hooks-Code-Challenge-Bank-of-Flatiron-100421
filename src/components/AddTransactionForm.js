import React from "react";
import { useState } from "react";


function AddTransactionForm(props) {
 
  const {
    handleAmountChange, 
    handleCategoryChange, 
    handleDescriptionChange, 
    handleDateChange, 
    handleSubmit} = props


  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" onChange={handleDateChange} />
          <input type="text" name="description" placeholder="Description" onChange={handleDescriptionChange} />
          <input type="text" name="category" placeholder="Category" onChange={handleCategoryChange} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleAmountChange} />
        </div>
        <button className="ui button" type="submit" onClick={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
