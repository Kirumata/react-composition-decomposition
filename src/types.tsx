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