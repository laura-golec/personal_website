import { BodyFontWeights, HeadingFontWeights } from '@constants';

export type BodyFontWeight = typeof BodyFontWeights[number];

export type HeadingFontWeight = typeof HeadingFontWeights[number];

export type Font = 'body' | 'heading';

export type FontWeight<T extends Font> = T extends 'body' ? BodyFontWeight : HeadingFontWeight;

export type FontSizes = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export type FontPresets = 'hero' | 'heading' | 'subheading' | 'h3' | 'h4' | 'body' | 'caption';