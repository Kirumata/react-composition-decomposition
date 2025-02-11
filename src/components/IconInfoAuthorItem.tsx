import { ItemProps } from "../types";
import IconInfoItem from "./IconInfoItem";
import InfoItem from "./InfoItem";
import "./styles.css"

export default function IconInfoAuthorItem(props: ItemProps) {
    return (
        <p><IconInfoItem {...props}/> {props.author}</p>
    )
}