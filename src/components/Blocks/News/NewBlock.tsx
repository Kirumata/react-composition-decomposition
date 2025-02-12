import BaseBlock from "../../BaseBlock"
import "./NewsBlock.css"
import NewsItem from "./NewsItem"

/**
 * Описывает блок с новостями
 *
 * @export
 * @returns {*} 
 */
export default function NewsBlock() {
    return (
        <BaseBlock {...{ title: "Новости" }}>
            <li><NewsItem {...{ icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCU8lR6MMPZrfYmjJSa02FPIsNQyRqYyWG0A&s", name: "Заголовок хорошей новости", link: "#" }} /></li>
            <li><NewsItem {...{ icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCU8lR6MMPZrfYmjJSa02FPIsNQyRqYyWG0A&s", name: "Заголовок хорошей новости", link: "#" }} /></li>
            <li><NewsItem {...{ icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCU8lR6MMPZrfYmjJSa02FPIsNQyRqYyWG0A&s", name: "Заголовок хорошей новости", link: "#" }} /></li>
        </BaseBlock>
    )
}