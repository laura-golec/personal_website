'use client'

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

export const Text = <T extends Font>(props: TextProps<T>) => {
    const classNames = [
        props.preset? TextPresets[props.preset] : TextPresets['body'],
        props.size? `text-size-${props.size}` : '',
        props.color ? `text-${props.color}` : '',
        props.font ? `font-${props.font}` : '',
        props.weight ? `font-weight-${props.weight}` : '',
        props.hover ? `hover:text-[var(--hover)]` : '',
    ].filter(Boolean).join(' ');

    const style = props.hover ? { '--hover': `var(--${props.hover})` } : {};

    return (
        <span className={classNames} style={style as React.CSSProperties}>
            {props.children}
        </span>
    );
};
