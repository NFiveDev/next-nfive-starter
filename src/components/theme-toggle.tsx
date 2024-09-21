'use client';

import { Button } from '@radix-ui/themes';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	return <Button size={'2'} variant='outline' highContrast color='gray'>theme</Button>
}
