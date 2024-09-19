import {
	Box,
	Container,
	Flex,
	Heading,
	Button,
	Link as RadixLink
} from '@radix-ui/themes';
import Link from 'next/link';

export default function NavigationBar() {
	return (
		<Box
			position={'sticky'}
			top={'0'}
			py={'3'}
			className="border-b border-slate-600"
			px={{ initial: '3', lg: '0' }}
		>
			<Container size={'4'}>
				<Flex
					justify={'between'}
					wrap={'nowrap'}
					direction={'row'}
					align={'center'}
				>
					<Heading
						color="gray"
						weight={'bold'}
						size={{ initial: '4', lg: '6' }}
					>
						Devcraft
					</Heading>

					<Flex as="div" gapX={'4'} align={'center'}>
						<RadixLink
							href="/signup"
							size={'2'}
							underline="always"
							weight={'medium'}
							color="gray"
						>
							Sign up
						</RadixLink>
						<Link href={'/login'}>
							<Button variant="solid" size={'2'}>
								Get started
							</Button>
						</Link>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
}
