import BaseBlock from "../../BaseBlock"
import "./LocalBlock.css"

/**
 * Описывает блок "Карта Германии"
 *
 * @export
 * @returns {*} 
 */
export default function LocalBlock() {
    return (
        <BaseBlock {...{ title: "Карта Германии" }}>
            <li><a className="main-link" href="#">Расписания</a></li>
        </BaseBlock>
    )
}