import { Section, Container, Box } from '@radix-ui/themes';
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
					<TextGradient
						as="h1"
						gradient="jade-to-jade"
						direction="left-to-right"
					>
						Devcraft
					</TextGradient>
				</Section>
			</Container>
		</main>
	);
}
