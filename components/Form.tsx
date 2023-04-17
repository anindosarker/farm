import React from 'react'

export default function Form() {
  return (
    <div>
      <div>
        <h1>Labor Expense</h1>
        <h2>Match with labor cost</h2>
      </div>
      <form action="">
        <div>
          <label htmlFor="crop">Crop</label>
          <input type="text" name="crop" id="crop" />
          <label htmlFor="type">Expense Type</label>
          <input type="text" name="type" id="crop" />
          <label htmlFor="amount">Amount</label>
          <input type="text" name="amount" id="crop" />
        </div>
      </form>
    </div>
  );
}
