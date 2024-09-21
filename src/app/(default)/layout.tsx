import Footer from '@/components/footer';
import NavigationBar from '@/components/navigation-bar';
import { Box } from '@radix-ui/themes';

export default function DefaultLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Box>
			<NavigationBar />
			<Box flexGrow={'1'} pb={'6'} pt={'4'}>
				{children}
			</Box>
			<Footer />
		</Box>
	);
}
