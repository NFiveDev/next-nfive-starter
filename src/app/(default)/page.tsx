import { Section, Container, Box } from '@radix-ui/themes';
import styles from './home.module.css';

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
				<Section>home</Section>
			</Container>
		</main>
	);
}
