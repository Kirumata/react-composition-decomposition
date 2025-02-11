import { MainInfo } from "../types";

export default function InfoItem(mainInfo: MainInfo) {
    return (
        <a href={mainInfo.link}>{mainInfo.title}</a>
    )
}