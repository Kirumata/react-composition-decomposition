import { ItemProps } from "../types";
import InfoItem from "./InfoItem";
import "./styles.css"

export default function IconInfoItem(props: ItemProps) {
    return (
        <><img className="itemLogo" src={props.icon}/><InfoItem {...props.header}/></>
    )
}