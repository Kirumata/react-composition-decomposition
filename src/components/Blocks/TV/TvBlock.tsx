import "./TVBlock.css"
import TvItem from "./TvItem"

/**
 * Описывает блок с телепрограммой
 *
 * @export
 * @returns {*} 
 */
export default function TvBlock() {
    return (
        <div>
            <h2><a className="link-title" href="#">Телепрограмма</a>&nbsp;<button>Эфир</button></h2>
            <ul className="no-bullets">
                <li><TvItem {...{time: "02:00", name: "Название передачи", link: "#", authorName: "Автор", authorLink: "#"}}/></li>
                <li><TvItem {...{time: "02:00", name: "Название передачи", link: "#", authorName: "Автор", authorLink: "#"}}/></li>
                <li><TvItem {...{time: "02:00", name: "Название передачи", link: "#", authorName: "Автор", authorLink: "#"}}/></li>
            </ul>
        </div>
    )
}