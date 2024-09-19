import { Box } from '@radix-ui/themes';

export default function DefaultLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Box>{children}</Box>;
}
