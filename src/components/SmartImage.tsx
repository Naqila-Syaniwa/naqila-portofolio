'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

type SmartImageProps = Omit<ImageProps, 'onError' | 'src'> & {
    alt: string;
    src?: ImageProps['src'];
};

export function SmartImage({ alt, className, src, ...props }: SmartImageProps) {
    const [failed, setFailed] = useState(false);

    if (failed || !src) {
        return (
            <div
                role="img"
                aria-label={alt}
                className={`from-surface to-background bg-gradient-to-br ${className ?? ''}`}
            />
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            loading="lazy"
            className={className}
            onError={() => setFailed(true)}
            {...props}
        />
    );
}