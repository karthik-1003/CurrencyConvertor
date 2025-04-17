import "./App.css";
import { InputBox } from "./components";
import swapIcon from "./assets/swap.svg";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const onFromCurrencyTypeChange = (currencyType) => {
    setFrom(currencyType);
  };

  const onToCurrencyTypeChange = (currencyType) => {
    setTo(currencyType);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const onAmountChange = (amount) => {
    if (Number(amount) < 0) {
      setAmount(0);
      return;
    }
    setAmount(() => amount);
  };

  const handleConversion = () => {
    setConvertedAmount((amount * currencyInfo?.[to]).toFixed(2));
  };
  const onKeyDown = (key) => {
    if (key === "Enter") {
      handleConversion();
    }
  };

  return (
    <>
      <div className="w-120 flex flex-col p-4 m-4 gap-2 bg-gray-400 rounded-2xl justify-center items-center relative">
        <h2 className="text-shadow-black font-bold text-3xl mb-3">
          Currency Convertor
        </h2>

        <InputBox
          label={"From"}
          currencyOptions={options}
          onCurrencyChange={onFromCurrencyTypeChange}
          selectCurrency={from}
          amount={amount}
          onAmountChange={onAmountChange}
          onKeyDown={onKeyDown}
        />
        <button
          className="bg-gray-400 outline-none px-4 py-2 rounded-full active:bg-gray-600 absolute"
          onClick={swap}
        >
          <img src={swapIcon} alt="Swap" className="w-6 h-9 " />
        </button>

        <InputBox
          label={"To"}
          currencyOptions={options}
          onCurrencyChange={onToCurrencyTypeChange}
          selectCurrency={to}
          amount={convertedAmount}
          amountDisable={true}
        />
        <button
          className="bg-blue-500 p-2 mt-2 text-xl font-semibold rounded-4xl"
          onClick={handleConversion}
        >{`Convert ${from.toUpperCase()} to ${to.toUpperCase()} `}</button>
      </div>
    </>
  );
}

export default App;
