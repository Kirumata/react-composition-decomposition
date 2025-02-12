import { PropsWithChildren } from "react"
import "../App.css"

/**
 * Универсальный компонент, основа блока с контентом
 *
 * @export
 * @param {PropsWithChildren<{ title: string }>} props 
 * @returns {*} 
 */
export default function BaseBlock(props: PropsWithChildren<{ title: string }>) {
    return (
        <div>
            <h2><a className="link-title" href="#">{props.title}</a></h2>
            <ul className="no-bullets">
                {props.children}
            </ul>
        </div>
    )
}