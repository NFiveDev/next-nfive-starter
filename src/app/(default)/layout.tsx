import Footer from '@/components/footer';
import NavigationBar from '@/components/navigation-bar';
import { Box, Flex } from '@radix-ui/themes';

export default function DefaultLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Box>
			<NavigationBar />
			<Box pb={'6'}>{children}</Box>
			<Footer />
		</Box>
	);
}
