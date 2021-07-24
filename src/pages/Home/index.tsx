import React, { useState , MouseEvent} from 'react'
import './home.scss'
import PersonSvg from '../../assets/images/icon-person.svg'
import DollarSvg from '../../assets/images/icon-dollar.svg'

export function Home() {
  // const [checked , setChecked] = useState(false)
  function handleTipButton(event : MouseEvent<HTMLButtonElement>, index: number){
    event.preventDefault()
    for(let i = 0 ; i<5 ; i++){
      document.getElementsByClassName('tip-button').item(i)?.classList.remove('pressed')
    }
    document.getElementsByClassName('tip-button').item(index)?.classList.add('pressed')
  }

  function handleReset() {

    console.log("clicou")
  }



  return (
    <main>
      <div className="table">
        <div className="money-info">
          <form action="">
            <p className="input-info">Bill</p>
            <div className="input-box" id="bill">
              <img src={DollarSvg} alt="" />
              <input type="number" placeholder="0" />
            </div>

            <p className="input-info">Select tip %</p>

            <div>
                <div>
                  <button className="tip-button" onClick={event => handleTipButton(event,0)}>5%</button>
                  <button className="tip-button" onClick={event => handleTipButton(event,1)}>10%</button>
                  <button className="tip-button" onClick={event => handleTipButton(event,2)}>15%</button>
                </div>

                <div>
                  <button className="tip-button" onClick={event => handleTipButton(event,3)}>20%</button>
                  <button className="tip-button" onClick={event => handleTipButton(event,4)}>25%</button>
                </div>
            </div>

            <p className="input-info">Number of People</p>

            <div className="input-box" id="people" >
              <img src={PersonSvg} alt="" />
              <input type="number" placeholder="0" />
            </div>
          </form>
        </div>

        <div className="results-screen">
          <div className="results-container">
            <div className="result-tag">
              <p className="title-result-tag">Tip Amount</p>
              <p className="subtitle-result-tag">/ person</p>
            </div>
            <h2>$4.27</h2>
          </div>

          <div className="results-container">
            <div className="result-tag">
              <p className="title-result-tag">Total</p>
              <p className="subtitle-result-tag">/ person</p>
            </div>
            <h2>$32.79</h2>
          </div>

          <button className="reset-button" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </main>
  )
}