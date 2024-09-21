'use client';

import { Button } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const setThemeHandler = () => {
		const nextTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(nextTheme);
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Button
			size={'2'}
			variant="outline"
			highContrast
			color="gray"
			onClick={setThemeHandler}
		>
			{theme === 'dark' ? <MoonIcon /> : <SunIcon />}
		</Button>
	);
}
