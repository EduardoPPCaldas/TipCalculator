import React, { useState, MouseEvent, ChangeEvent } from 'react'
import './home.scss'
import PersonSvg from '../../assets/images/icon-person.svg'
import DollarSvg from '../../assets/images/icon-dollar.svg'

export function Home() {
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)
  const [people, setPeople] = useState(0)

  function handleTipButton(event: MouseEvent<HTMLButtonElement>, index: number) {
    event.preventDefault()
    const button = document.getElementsByClassName('tip-button').item(index)

    if (button?.classList.contains('pressed')) {
      button.classList.remove('pressed')
      setTipAmount(0)
      return;
    }

    for (let i = 0; i < 5; i++) {
      document.getElementsByClassName('tip-button').item(i)?.classList.remove('pressed')
    }
    document.getElementsByClassName('tip-button').item(index)?.classList.add('pressed')
    switch(index){
      case 0:
        setTipAmount(0.05)
        break
      case 1:
        setTipAmount(0.10)
        break
      case 2:
        setTipAmount(0.15)
        break
      case 3:
        setTipAmount(0.20)
        break
      case 4:
        setTipAmount(0.25)
        break
      default:
        setTipAmount(0)
        break
    }
  }

  function handleTotalBill(event : ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setTotal(Number(event.target.value))
  }

  function handleTotalPeople(event : ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setPeople(Number(event.target.value))
  }

  function handleReset(event : MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    let peopleValue = document.getElementById('people-input') as HTMLInputElement
    peopleValue.value = ""

    let billsValue = document.getElementById("bills-input") as HTMLInputElement
    billsValue.value = ""
    setTotal(0)
    setPeople(0)

  }

  function handleCustomTip(event : ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    let tip = Number(event.target.value) / 100
    setTipAmount(tip)
  }
  



  return (
    <main>
      <div className="table">
        <div className="money-info">
          <p className="input-info">Bill</p>
          <div className="input-box" id="bill">
            <img src={DollarSvg} alt="" />
            <input type="number" maxLength={6} min={0} placeholder="0" id="bills-input" onChange={handleTotalBill}/>
          </div>

          <p className="input-info">Select tip %</p>

          <div>
            <div>
              <button className="tip-button" onClick={event => handleTipButton(event, 0)}>5%</button>
              <button className="tip-button" onClick={event => handleTipButton(event, 1)}>10%</button>
              <button className="tip-button" onClick={event => handleTipButton(event, 2)}>15%</button>
            </div>

            <div>
              <button className="tip-button" onClick={event => handleTipButton(event, 3)}>20%</button>
              <button className="tip-button" onClick={event => handleTipButton(event, 4)}>25%</button>
              <input type="number" id="custom" onChange={handleCustomTip} placeholder="Custom"/>
            </div>
          </div>

          <p className="input-info" id="number-of-people">Number of People</p>

          <div className="input-box" id="people" >
            <img src={PersonSvg} alt=""/>
            <input type="number" placeholder="0" id="people-input" onChange={handleTotalPeople} />
          </div>
        </div>

        <div className="results-screen">
          <div className="results-container">
            <div className="result-tag">
              <p className="title-result-tag">Tip Amount</p>
              <p className="subtitle-result-tag">/ person</p>
            </div>
            <h2>${people > 0 ? ((tipAmount * total)/people).toFixed(2) : (tipAmount * total).toFixed(2)}</h2>
          </div>

          <div className="results-container">
            <div className="result-tag">
              <p className="title-result-tag">Total</p>
              <p className="subtitle-result-tag">/ person</p>
            </div>
            <h2>${people > 0 ? ((total/people) + ((tipAmount * total)/people)).toFixed(2) : (total + (tipAmount*total)).toFixed(2)}</h2>
          </div>

          <button className="reset-button" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </main>
  )
}