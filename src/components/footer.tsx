import { Container, Flex, Box } from '@radix-ui/themes';
import Link from 'next/link';

export default function Footer() {
	return (
		<Box position={'fixed'} bottom={'1'} className="w-full">
			<Container>
				<Flex justify={'between'}>
					<Flex></Flex>
					<Flex>
						<Link href={'https://discord.com/'}>discord</Link>
						<Link href={'https://youtube.com'}>youtube</Link>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
}
