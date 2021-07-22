import React, { useState } from 'react'
import './home.scss'
import PersonSvg from '../../assets/images/icon-person.svg'
import DollarSvg from '../../assets/images/icon-dollar.svg'
import { Button } from '../../components/Button'

export function Home(){
  const [activeButton1, setActiveButton1] = useState(false)
  const [activeButton2, setActiveButton2] = useState(false)
  const [activeButton3, setActiveButton3] = useState(false)
  const [activeButton4, setActiveButton4] = useState(false)
  const [activeButton5, setActiveButton5] = useState(false)

  function handleButtonTip(){
    setActiveButton1(false)
    setActiveButton2(false)
    setActiveButton3(false)
    setActiveButton4(false)
    setActiveButton5(false)
  }

  function handleReset(){
    
    console.log("clicou")
  }

  

  return(
    <main>
      <div className="table">
        <div className="money-info">
          <form action="">
            <p className="input-info">Bill</p>
            <div className="input-box" id="bill">
              <img src={DollarSvg} alt="" />
              <input type="number" placeholder="0"/>
            </div>

            <p className="input-info">Select tip %</p>
            
            <div>
              <div>
                <Button className={activeButton1 ? "pressed" : ""} id="button1" onClick={(event) => {
                  event.preventDefault()
                  handleButtonTip()
                  setActiveButton1(true)
                }}>5%</Button>
                <Button className={activeButton2 ? "pressed" : ""} id="button2" onClick={(event) => {
                  event.preventDefault()
                  handleButtonTip()
                  setActiveButton2(true)
                }}>10%</Button>
                <Button className={activeButton3 ? "pressed" : ""} id="button3" onClick={(event) => {
                  event.preventDefault()
                  handleButtonTip()
                  setActiveButton3(true)
                }}>15%</Button>
              </div>

              <div>
              <Button className={activeButton4 ? "pressed" : ""} id="button4" onClick={(event) => {
                  event.preventDefault()
                  handleButtonTip()
                  setActiveButton4(true)
                }}>20%</Button>
                <Button className={activeButton5 ? "pressed" : ""} id="button5" onClick={(event) => {
                  event.preventDefault()
                  handleButtonTip()
                  setActiveButton5(true)
                }}>25%</Button>
              </div>
            </div>

            <p className="input-info">Number of People</p>

            <div className="input-box" id="people" >
              <img src={PersonSvg} alt="" />
              <input type="number" placeholder="0"/>
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