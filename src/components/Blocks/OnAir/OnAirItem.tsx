/**
 * Описывает одну передачу в блоке "Эфир"
 *
 * @export
 * @param {{
 *     icon:string,
 *     name: string
 *     link: string,
 *     authorName: string,
 *     authorLink: string
 * }} props 
 * @returns {*} 
 */
export default function OnAirItem(props:{
    icon:string,
    name: string
    link: string,
    authorName: string,
    authorLink: string
}){
    return(
        <>
            <img className="item-icon" src={props.icon}></img>&nbsp;
            <a className="main-link" href={props.link}>{props.name}</a>&nbsp;
            <a className="sub-link" href={props.authorLink}>{props.authorName}</a>
        </>
    )
}