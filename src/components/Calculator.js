import { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [bill, setBill] = useState('0.00')
  const [tip, setTip] = useState('15')
  const [split, setSplit] = useState('1')

  return (
    <div className = "Calculator">
      <h1>Tip Calculator</h1>
      <form className="Calculator-Input">
        <label>
          Bill
          <input 
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </label>

        <label>
          Tip %
          <input 
            type="number"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        </label>

        <label>
          Number of people
          <input 
            type="number"
            value={split}
            onChange={(e) => setSplit(e.target.value)}
          />
        </label>
      </form>
      <div className="Calculator-Display">
      <p>Tip ${(bill * (tip/100)).toFixed(2)}</p>
      <p>Total per person: 
          ${((Number(bill) + (bill * (tip/100)))/split).toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default Calculator;