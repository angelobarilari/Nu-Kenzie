import { useState } from "react";
import "./style.css"

function TotalMoney ( {listTransactions} ) {
    function sumBalance() {
        const accumulator = listTransactions.reduce(
        (previousValue, currentValue) => previousValue + currentValue.value, 0);
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