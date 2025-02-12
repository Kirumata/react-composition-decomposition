import BaseBlock from "../../BaseBlock";

/**
 * Описывает блок "Посещаемое"
 *
 * @export
 * @returns {*} 
 */
export default function PopularBlock() {
    return (
        <BaseBlock {...{ title: "Посещаемое" }}>
            <li><a className="main-link" href="#">Имя раздела</a> - комментарий</li>
            <li><a className="main-link" href="#">Имя раздела</a> - комментарий</li>
            <li><a className="main-link" href="#">Имя раздела</a> - комментарий</li>
        </BaseBlock>
    )
}