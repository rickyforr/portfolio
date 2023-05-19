import React from "react";

type Props = {
    src: string;
    alt: string;
    className: string;
};

export default function Img({ src, alt, className }: Props) {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className={className} />
    );
}
