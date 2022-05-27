import "./style.css"
import { useState } from "react";
import Button from "../Button";

function Form( { listTransactions, setListTransactions } ) {
    const [descriptionInput, setDescriptionInput] = useState("");
    const [entryTypeInput, setEntryTypeInput]     = useState("Entrada");
    const [moneyInput, setMoneyInput]             = useState("");

    function handleForm(event) {
        event.preventDefault()
        const transaction = {
            description: descriptionInput,
            type: entryTypeInput,
            value: Number(moneyInput)
        }
        setListTransactions(listTransactions.concat(transaction))
    }

    return (
        <form onSubmit={handleForm}>
            <div id="descriptionSection">
                <label id="descriptonLabel" htmlFor="description">Descrição</label>
                <input id="description" 
                       type="text" 
                       placeholder="Digite aqui sua descrição"
                       value={descriptionInput}
                       onChange={(event) => setDescriptionInput(event.target.value)}/>  
            </div>

            <div id="labelSection">
                <label id="moneyLabel" htmlFor="money">Valor</label>
                <label id="valueType" htmlFor="valueType">Tipo de valor</label>
            </div>

            <div id="selectSection">
                <input id="money" 
                       type="number"
                       placeholder="R$" 
                       value={moneyInput}
                       onChange={(event) => setMoneyInput(event.target.value)} />
                
                <label htmlFor="description"></label>
                    <select id="descriptionArea"
                            value={entryTypeInput}
                            onChange={(event) => setEntryTypeInput(event.target.value)}>
                        <option value="Entrada">Entrada</option>
                        <option value="Saída">Saída</option>
                    </select>
            </div>
            <Button btnText={"Inserir valor"} />
        </form>
    )
}

export default Form;