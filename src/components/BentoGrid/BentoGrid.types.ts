import React from "react";

export interface BentoItemType {
    title?: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
}

export interface BentoGridItems {
    col1?: BentoItemType;
    col2?: BentoItemType;
    col3?: BentoItemType;
    col4?: BentoItemType & { codeSnippet?: string };
}

export interface BentoItemProps extends BentoItemType {
    className?: string;
    imageWrapperClassName?: string;
    imageClassName?: string;
    children?: React.ReactNode;
}

