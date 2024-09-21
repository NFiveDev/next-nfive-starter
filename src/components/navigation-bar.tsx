import {
	Box,
	Container,
	Flex,
	Heading,
	Button,
	Link as RadixLink
} from '@radix-ui/themes';
import Link from 'next/link';
import ThemeToggle from './theme-toggle';

export default function NavigationBar() {
	return (
		<Container
			size={'4'}
			position={'sticky'}
			top={{ initial: '0', lg: '3' }}
			maxWidth={'1160px'}
		>
			<Box
				py={'3'}
				px={'4'}
				style={{
					background: 'var(--color-panel)',
					borderRadius: '5px'
				}}
			>
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
						<Box mr={'1'}>
							<ThemeToggle />
						</Box>

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
			</Box>
		</Container>
	);
}
