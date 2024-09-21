import {
	Section,
	Container,
	Box,
	Heading,
	Flex,
	Button
} from '@radix-ui/themes';
import styles from './home.module.css';
import TextGradient from '@/components/text-gradient';

export default function Home() {
	return (
		<main>
			<Box
				position={'absolute'}
				top={'0'}
				left={'0'}
				right={'0'}
				height={'900px'}
				overflowX={'hidden'}
				className={styles.hero_landing_bg}
			></Box>
			<Container size={'4'} px={{ initial: '2', lg: '0' }}>
				<Section>
					<Flex
						align={'center'}
						direction={'column'}
						gapY={'2'}
						pt={{ initial: '0', lg: '9' }}
						style={{ textAlign: 'center' }}
					>
						<Heading
							size={{ initial: '7', lg: '9' }}
							color="gray"
							highContrast
							weight={'bold'}
						>
							{'Welcome to this '}
							<TextGradient
								gradient="jade-to-jade"
								direction="left-to-right"
							>
								Starter Template
							</TextGradient>
						</Heading>
						<Box px={{ initial: '5', lg: '0' }}>
							<Heading color="gray" size={'2'} weight={'regular'}>
								This is a subheader explaining more about the
								site. Keep the user exited
							</Heading>
						</Box>

						<Flex direction={{initial: 'column', lg: 'row'}} gap={'4'} mt={'2'}>
							<Button size={{initial: '3', lg: '3' }}>Get started</Button>
							<Button size={{initial: '3', lg: '3' }} variant="solid" color="gray">
								Watch intro
							</Button>
						</Flex>
					</Flex>
				</Section>
				<Section></Section>
			</Container>
		</main>
	);
}
