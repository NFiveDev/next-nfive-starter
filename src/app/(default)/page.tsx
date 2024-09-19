import { Section, Container } from '@radix-ui/themes';

export default function Home() {
	return (
		<main>
			<Container size={'4'} px={{ initial: '2', lg: '0' }}>
				<Section>home</Section>
			</Container>
		</main>
	);
}
