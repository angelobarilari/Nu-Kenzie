import "./style.css"
import { IoMdTrash } from "react-icons/io"

function Card( { transaction }) {
    return (
        <div className="card">
            <div id="transactionInfo">
                <p id="transactionDescription">
                    {transaction.description}
                </p>

                <p id="transactionType">
                    {transaction.type}
                </p>
            </div>
            
            <div id="transactionAreaValue">
                <p id="transactionValue">
                    R$ {transaction.value}  
                </p>
                <button id="deleteButton">    
                    <IoMdTrash id="trashIcon"/>   
                </button>
            </div>
        </div>
    )
}

export default Card;