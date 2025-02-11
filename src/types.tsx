/**
 * Пропсы для основного блока контента
 *
 * @export
 * @interface ContentBlockProps
 * @typedef {ContentBlockProps}
 */
export interface ContentBlockProps {
    header: MainInfo,
}

export interface ItemProps {
    header: MainInfo,
    description?: string,
    author?: string,
    icon?: string,
}

export interface MainInfo{
    title: string,
    link?: string,
}