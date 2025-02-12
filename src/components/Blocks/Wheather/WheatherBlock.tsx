import BaseBlock from "../../BaseBlock"
import "./WheatherBlock.css"
import WheatherWidget from "./WheatherWidget"

/**
 * Описывает блок "погода"
 *
 * @export
 * @returns {*} 
 */
export default function WheatherBlock() {
    return (
        <BaseBlock {...{ title: "Погода" }}>
            <WheatherWidget />
        </BaseBlock>
    )
}