/**
 * Описывает блок с одной программой
 *
 * @export
 * @param {{
 *     time:string,
 *     name: string
 *     link: string,
 *     authorName: string,
 *     authorLink: string
 * }} props 
 * @returns {*} 
 */
export default function TvItem(props:{
    time:string,
    name: string
    link: string,
    authorName: string,
    authorLink: string
}){
    return(
        <>
            {props.time}&nbsp;
            <a className="main-link" href={props.link}>{props.name}</a>&nbsp;
            <a className="sub-link" href={props.authorLink}>{props.authorName}</a>
        </>
    )
}