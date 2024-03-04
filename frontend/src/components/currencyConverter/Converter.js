import { useState } from 'react'
import InputBox from './currency/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// import currency from '../../img/currency.jpg'
// import inr from '../../img/inr.jpg'
// import inr1 from '../../img/inr2.jpg'
import inr2 from '../../img/tree.jpg'


function Converter() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
//   let location = useLocation();

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }

  

  return (
    <div
        className="currency-container"
        style={{backgroundImage: `url(${inr2})`,paddingTop:"100px",height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30" style={{background: "rgb(255 255 255 / 0.3)", backdropFilter: "blur(3px)"}}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5" style={{textAlign: "center", position: "relative"}}>
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                            style={{background: "#2563eb", padding: "4px", borderRadius: "6px", position: "absolute", top: "-20px", left: "42%"}}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <div className="button" style={{textAlign: "center"}}>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" style={{background: "#2563eb", borderRadius: "6px", border: "none" , width: "-webkit-fill-available"}}>
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
}

export default Converter
