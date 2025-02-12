import "./FinanceBlock.css"
import FinanceItem from "./FinanceItem"

/**
 * Описывает блок с курсами валют
 *
 * @export
 * @returns {*} 
 */
export default function FinanceBlock() {
    return (
        <div>
            <FinanceItem {...{ name: "USD MOEX", value: "63,52", info: "+0,09" }} />&nbsp;
            <FinanceItem {...{ name: "USD MOEX", value: "63,52", info: "+0,09" }} />&nbsp;
            <FinanceItem {...{ name: "USD MOEX", value: "63,52", info: "+0,09" }} />
        </div>
    )
}