import { Footer } from "./components/Footer";
import salle from './images/salle-2.jpg';

const styles = {
	header: {
		background:`url(${salle})`,
		backgroundSize: 'fill',
		backgroundPosition: '50% 50%',
		textAlign: 'center',
		minHeight: '60vh',
		color:'white',
		fontSize:'10vh',
	},
}

export const App = () => {
	return (
		<div>
			<header style={styles.header}>
				Thevy Mahal
			</header>
			<Footer/>
		</div>
	);
}