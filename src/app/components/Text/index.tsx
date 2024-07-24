import React from 'react';

const BodyFontWeights = [
    "100",
    "300",
    "400",
    "700",
    "900",
] as const;

type BodyFontWeight = typeof BodyFontWeights[number];

const HeadingFontWeights = [
    "300",
    "400",
    "500",
    "600",
    "700",
] as const;

type HeadingFontWeight = typeof BodyFontWeights[number];

type Font = 'body' | 'heading';

type FontWeightMap = {
    body: BodyFontWeight;
    heading: HeadingFontWeight;
};

type FontWeight<T extends Font> = T extends 'body' ? BodyFontWeight : HeadingFontWeight;


interface TextProps<T extends Font> {
    color?: 'foreground' | 'primary' | 'secondary' | 'accent';
    font?: T;
    weight?: FontWeight<T>;
    type?: 'default' | 'primary' | 'secondary';
    size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
    children: React.ReactNode;
}

const typeStyles: Record<string, string> = {
    default: 'text-default',
    primary: 'text-primary',
    secondary: 'text-secondary',
};

const sizeStyles: Record<string, string> = {
    small: 'text-sm',
    medium: 'text-md',
    large: 'text-lg',
};

export const Text = <T extends Font>({
    color = 'foreground',
    font,
    weight = '700',
    type = 'default',
    size = 'medium',
    children
}: TextProps<T>) => {
    const classNames = [
        typeStyles[type],
        sizeStyles[size],
        color ? `${color}` : '',
        font ? `font-${font}` : '',
        weight ? `${weight}` : ''
    ].join(' ');

    return (
        <span className={classNames}>
            {children}
        </span>
    );
};
