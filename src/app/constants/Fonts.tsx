import { FontPresets } from '@types';

export const BodyFontWeights = [
    "100",
    "300",
    "400",
    "700",
    "900",
] as const;

export const HeadingFontWeights = [
    "300",
    "400",
    "500",
    "600",
    "700",
] as const;

export const TextPresets: Record<FontPresets, string> = {
    'hero': '',
    'heading': 'font-heading font-size-xlarge text-primary font-weight-700',
    'subheading': 'font-heading font-size-large text-secondary font-weight-600',
    'h3': 'font-heading font-size-medium text-accent font-weight-600',
    'h4': 'font-body font-size-medium text-foreground font-weight-400',
    'body': 'font-body font-size-small text-foreground font-weight-400',
    'caption': 'font-body font-size-xsmall text-foreground_muted font-weight-400',
}