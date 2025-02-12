import "./FinanceBlock.css"

/**
 * Описывает блок с курсом одной валюты
 *
 * @export
 * @param {{
 *     name:string,
 *     value: string
 *     info: string,
 * }} props 
 * @returns {*} 
 */
export default function FinanceItem(props:{
    name:string,
    value: string
    info: string,
}){
    return (
        <>
        <span className="currency">{props.name}&nbsp;</span>
        {props.value}&nbsp;
        <span className="details">{props.info}</span>
        </>
    )
}