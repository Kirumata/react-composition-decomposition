import { ContentBlockProps, ItemProps } from "../../types"
import ContentBlock from "../ContentBlock"
import IconInfoAuthorItem from "../IconInfoAuthorItem"

export default function NewsBlock() {

    const title: ContentBlockProps = {
        header: {
            title: "Эфир",
            link: "#"
        }
    }

    const content: ItemProps[] = [
        {
            header: {
                title: "Новая трансляция",
                link: "#"
            },
            author: "Автор",
            icon: "https://img.freepik.com/premium-vector/planet-saturn-logo-vector-illustration-design-planet-logo-template-space-logo-vector_9999-19480.jpg"
        },
    ]
    return (
        <ContentBlock {...title}>
            <IconInfoAuthorItem {...content[0]} />
            <IconInfoAuthorItem {...content[0]} />
            <IconInfoAuthorItem {...content[0]} />
        </ContentBlock>
    )
}