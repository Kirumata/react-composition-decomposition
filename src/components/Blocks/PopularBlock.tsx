import { ContentBlockProps, ItemProps } from "../../types"
import ContentBlock from "../ContentBlock"
import InfoDescriptionItem from "../InfoDescriptionItem"

export default function PopularBlock() {

    const title: ContentBlockProps = {
        header: {
            title: "Посещаемое",
            link: "#"
        }
    }

    const content: ItemProps[] = [
        {
            header: {
                title: "Название",
                link: "#"
            },
            description: " - комментарий"
        },
    ]
    return (
        <ContentBlock {...title}>
            <InfoDescriptionItem {...content[0]} />
            <InfoDescriptionItem {...content[0]} />
            <InfoDescriptionItem {...content[0]} />
        </ContentBlock>
    )
}