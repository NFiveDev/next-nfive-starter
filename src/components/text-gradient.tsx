import { ReactNode } from 'react';

type GradientColorVariants = 'jade-to-jade';
type GradientDirection = 'left-to-right';
type TextGradientProps = {
	gradient: GradientColorVariants;
	direction: GradientDirection;
	children: ReactNode;
};

const ResolveGradientCls = (
	typeOfGradient: GradientColorVariants,
	direction: GradientDirection
) => {
	const directionMap = new Map<GradientDirection, string>([
		['left-to-right', 'to right']
	]);

	const gradientMap = new Map<GradientColorVariants, string>([
		['jade-to-jade', 'var(--jade-9), var(--jade-10)']
	]);

	const directionCss = directionMap.get(direction);
	const gradientCls = gradientMap.get(typeOfGradient);

	return `linear-gradient(${directionCss}, ${gradientCls})`;
};

export default function TextGradient({
	gradient,
	direction,
	children
}: TextGradientProps) {
	const gradientCls = ResolveGradientCls(gradient, direction);
	return (
		<span
			style={{
				background: gradientCls,
				backgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				display: 'inline-block'
			}}
		>
			{children}
		</span>
	);
}
