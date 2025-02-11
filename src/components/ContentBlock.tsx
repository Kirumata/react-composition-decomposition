import { PropsWithChildren } from "react";
import { ContentBlockProps } from "../types";

/**
 * Базовый класс для отображения блока контента (телепрограмма, новости и т.п.)
 *
 * @export
 * @returns {*} 
 */
export default function ContentBlock(mainContentProps: PropsWithChildren<ContentBlockProps>) {
    return (
        <div>
            <h2><a href={mainContentProps.header.link}>{mainContentProps.header.title}</a></h2>
            {mainContentProps.children}
        </div>
    )
}