import { ItemProps } from "../types";
import InfoItem from "./InfoItem";

export default function InfoDescriptionItem(props: ItemProps) {
    return (
        <p><InfoItem {...props.header}/> {props.description}</p>
    )
}