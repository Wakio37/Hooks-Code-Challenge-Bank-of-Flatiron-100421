import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState(0)
  const [updated, setUpdated] = useState(false)



  function handleSearchChange(e) {
    console.log(e.target.value)
    fetch(`http://localhost:8001/transactions?description_like=${e.target.value}`)
    .then(r=>r.json())
    .then(data=>setTransactions(data))
  }
  
  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then(r=>r.json())
    .then(data=>setTransactions(data))
  }, [updated])


  function handleDateChange(e) {
    setDate(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }

  function handleAmountChange(e) {
    setAmount(e.target.value)
  }


  function handleSubmit(e) {
    e.preventDefault()
    const newTransaction = {
      date: date,
      description: description,
      category: category,
      amount: amount
    }
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
    .then(r=>r.json())
    .then(data=>{
      setUpdated(!updated)
    })
  }

  return (
    <div>
      <Search  handleSearchChange={handleSearchChange}/>
      <AddTransactionForm handleAmountChange={handleAmountChange} handleCategoryChange={handleCategoryChange} handleDescriptionChange={handleDescriptionChange} handleDateChange={handleDateChange} handleSubmit={handleSubmit}/>
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
