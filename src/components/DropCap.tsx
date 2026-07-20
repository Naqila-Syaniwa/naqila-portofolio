import { ElementType } from "react";

interface DropCapProps {
    children: string;
    as?: ElementType;
    className?: string;
}

export function DropCap({ children, as = 'span', className = '' }: DropCapProps) {
    const Tag = as;
    const firstLetter = children.charAt(0);
    const rest = children.slice(1);

    return (
        <Tag className={`font-sans ${className}`}>
            <span className="font-serif italic">{firstLetter}</span>
            {rest}
        </Tag>
    );
}