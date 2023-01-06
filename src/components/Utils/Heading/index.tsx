import React from "react"

interface HeadingProps extends JSX.IntrinsicAttributes{
type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
children: React.ReactNode,
className: string;
}

 const elements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
}

const Heading = ({type, children, ...props} : HeadingProps) => {
    return React.createElement(elements[type] || elements.h1, props, children)
}

export default Heading;