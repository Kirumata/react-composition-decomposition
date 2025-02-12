import BaseBlock from "../../BaseBlock";
import OnAirItem from "./OnAirItem";

const onAirIcon: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVikNpHPDLqSKBjvaGC9RbCWb2PCAeZbWHw&s";

/**
 * Описывает блок "Эфир"
 *
 * @export
 * @returns {*} 
 */
export default function OnAirBlock() {
    return (
        <BaseBlock {...{ title: "Эфир" }}>
            <li><OnAirItem {...{ icon: onAirIcon, name: "Название передачи", link: "#", authorName: "Автор", authorLink: "#" }} /></li>
            <li><OnAirItem {...{ icon: onAirIcon, name: "Название передачи", link: "#", authorName: "Автор", authorLink: "#" }} /></li>
            <li><OnAirItem {...{ icon: onAirIcon, name: "Название передачи", link: "#", authorName: "Автор", authorLink: "#" }} /></li>
        </BaseBlock>
    )
}