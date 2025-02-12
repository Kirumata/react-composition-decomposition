import BaseBlock from "../../BaseBlock"
import "./SpecialBlock.css"

/**
 * Описывает блок с картинкой в правом верхнем углу про диктант
 *
 * @export
 * @returns {*} 
 */
export default function SpecialBlock() {
    return (
        <div>
            <div className="block">
                <img className="title-img" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png" />
                <BaseBlock {...{ title: "Работа над ошибками" }}>
                    <p>Смотрите на Яндексе и запоминайте</p>
                </BaseBlock>
            </div>
        </div>
    )

}