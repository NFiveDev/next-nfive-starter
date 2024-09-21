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
				className={styles.hero_landing_bg}
			></Box>
			<Container size={'4'} px={{ initial: '2', lg: '0' }}>
				<Section>
					<Flex
						justify={'center'}
						align={'center'}
						direction={'column'}
						gapY={'2'}
						pt={'9'}
					>
						<Heading
							size={'9'}
							color="gray"
							highContrast
							style={{ display: 'inline-block' }}
						>
							{'Welcome to this '}
							<TextGradient
								gradient="jade-to-jade"
								direction="left-to-right"
							>
								Starter Template
							</TextGradient>
						</Heading>
						<Heading color="gray" size={'2'} weight={'regular'}>
							This is a subheader explaining more about the site.
							Keep the user exited
						</Heading>
						<Flex gap={'4'} mt={'2'}>
							<Button size={'3'}>Get started</Button>
							<Button size={'3'} variant="solid" color="gray">
								Watch intro
							</Button>
						</Flex>
					</Flex>
				</Section>
			</Container>
		</main>
	);
}
