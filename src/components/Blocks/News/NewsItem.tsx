/**
 * Описывает блок с одной новостью
 *
 * @export
 * @param {{
 *     icon:string,
 *     name: string
 *     link: string,
 * }} props 
 * @returns {*} 
 */
export default function NewsItem(props:{
    icon:string,
    name: string
    link: string,
}){
    return(
        <>
            <img className="item-icon" src={props.icon}></img>&nbsp;
            <a className="main-link" href={props.link}>{props.name}</a>
        </>
    )
}