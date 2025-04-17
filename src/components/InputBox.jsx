import React, { useId } from "react";

function InputBox({
  label,
  className = "",
  amount,
  onKeyDown,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();
  return (
    <div
      className={`bg-white flex justify-between w-100 rounded-xl p-3 text-lg ${className}`}
    >
      <div className="flex flex-col gap-4">
        <label htmlFor={amountInputId} className="text-gray-500">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="outline-none w-1/2"
          placeholder="0"
          disabled={amountDisable}
          value={amount ? amount : ""}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          onKeyDown={(e) => onKeyDown(e.key)}
        ></input>
      </div>
      <div className="flex flex-col gap-4 text-right ">
        <label htmlFor="CurrType" className="text-gray-500">
          Currency Type
        </label>
        <select
          id="CurrType"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="bg-gray-100"
        >
          {currencyOptions.map((currencyOption) => {
            return <option key={currencyOption}>{currencyOption}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
