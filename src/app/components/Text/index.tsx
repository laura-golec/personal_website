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

type HeadingFontWeight = typeof HeadingFontWeights[number];

type Font = 'body' | 'heading';

type FontWeight<T extends Font> = T extends 'body' ? BodyFontWeight : HeadingFontWeight;

interface TextProps<T extends Font> {
    color?: 'foreground' | 'primary' | 'secondary' | 'accent';
    font?: T;
    weight?: FontWeight<T>;
    type?: 'heading' | 'subheading' | 'h3' | 'h4' | 'body' | 'caption';
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    children: React.ReactNode;
}

export const Text = <T extends Font>({
    color = 'foreground',
    font,
    weight = '400',
    type = 'body',
    size = 'small',
    children
}: TextProps<T>) => {
    const classNames = [
        type? `type-${type}` : '',
        size? `font-size-${size}` : '',
        color ? `${color}` : '',
        font ? `font-${font}` : '',
        weight ? `font-weight-${weight}` : ''
    ].join(' ');

    return (
        <span className={classNames}>
            {children}
        </span>
    );
};
