import React from 'react';
import { Colors, Font, FontWeight, FontPresets, FontSizes } from '@types'
import { TextPresets } from '@constants'

interface TextProps<T extends Font> {
    color?: Colors;
    font?: T;
    weight?: FontWeight<T>;
    preset?: FontPresets;
    size?: FontSizes;
    hover?: Colors;
    children: React.ReactNode;
}

export const Text = <T extends Font>({
    color,
    font,
    weight,
    preset = 'body',
    size,
    children
}: TextProps<T>) => {
    const classNames = [
        preset? TextPresets[preset]: '',
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
