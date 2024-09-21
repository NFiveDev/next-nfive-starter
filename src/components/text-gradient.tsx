import { ReactNode } from 'react';

type GradientColorVariants = 'jade-to-jade';
type GradientDirection = 'left-to-right';
type TextGradientProps = {
	as: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
	gradient: GradientColorVariants;
	direction: GradientDirection;
	children: ReactNode;
};

const ResolveGradientCls = (
	input: GradientColorVariants,
	direction: GradientDirection
) => {
	const directionMap = new Map<GradientDirection, string>([
		['left-to-right', 'to right']
	]);

	const directionCss = directionMap.get(direction);
};

export default function TextGradient({
	as,
	gradient,
	direction,
	children
}: TextGradientProps) {
	const Component = as || 'span';
	const gradientCls = ResolveGradientCls(gradient, direction);
	return <Component className={gradientCls}>{children}</Component>;
}
