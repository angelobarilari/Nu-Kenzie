import { useState } from "react";
import "./style.css"

function TotalMoney ( {listTransactions} ) {
    
    function convertToNums () {
        let result = []
        listTransactions.forEach(element => {
            if (typeof element.value !== "number") {
                result.push(Number(element.value))
            } else {
                result.push(element.value)
            }
        });
        return result
    }

    function sumBalance() {
        const initialValue = 0
        const accumulator = convertToNums().reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue);
        return accumulator
    }

    return (
        <div id="totalMoney">
            <div id="moneyInfo">
                <span id="totalValue">
                    Valor Total:
                </span>

                <span id="moneyInTotalMoney">
                    $ {sumBalance()}
                </span>
            </div>

            <span>
                O valor se refere ao saldo
            </span>
        </div>
    )
}

export default TotalMoney;