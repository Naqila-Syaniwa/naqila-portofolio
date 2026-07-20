import { ElementType } from "react";

interface DropCapProps {
    children: string;
    as?: ElementType;
    className?: string;
}

export function DropCap({ children, as = 'span', className = '' }: DropCapProps) {
    const Tag = as;
    const words = children.split(' ');

    return (
        <Tag className={`font-sans ${className}`}>
            {words.map((word, i) => (
                <span key={i}>
                    {i > 0 && ' '}
                    <span className="font-serif italic">{word.charAt(0)}</span>
                    {word.slice(1)}
                </span>
            ))}
        </Tag>
    );
}