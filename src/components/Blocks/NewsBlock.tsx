import { ContentBlockProps, ItemProps } from "../../types"
import ContentBlock from "../ContentBlock"
import IconInfoItem from "../IconInfoItem"

export default function NewsBlock() {

    const title: ContentBlockProps = {
        header: {
            title: "Сейчас в СМИ",
            link: "#"
        }
    }

    const content: ItemProps[] = [
        {
            header: {
                title: "Очень интересная новость",
                link: "#"
            },
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-smile.svg/2048px-Face-smile.svg.png"
        },
    ]
    return (
        <ContentBlock {...title}>
            <p><IconInfoItem {...content[0]} /></p>
            <p><IconInfoItem {...content[0]} /></p>
            <p><IconInfoItem {...content[0]} /></p>
            <p><IconInfoItem {...content[0]} /></p>
            <p><IconInfoItem {...content[0]} /></p>
        </ContentBlock>
    )
}