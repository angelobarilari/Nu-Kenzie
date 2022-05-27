import "./style.css";
import Button from "../Button"

function Filters () {
    return (
        <nav id="filters">
            <p>
                Resumo financeiro
            </p>
            <div id="filterBtns">
                <Button btnText={"Todos"}/>
                <Button btnText={"Entradas"}/>
                <Button btnText={"Saídas"}/>
            </div>
        </nav>
    )
}

export default Filters;