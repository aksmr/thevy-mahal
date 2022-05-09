import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import salle from './images/salle-2.jpg';

const styles = {
	header: {
		background:`url(${salle})`,
		backgroundSize: 'fill',
		backgroundPosition: '50% 50%',
		textAlign: 'center',
		minHeight: '100vh',
		color:'white',
		fontSize:'10vh',
	},
}

export const App = () => {
	return (
		<div>
			<Navbar />
			<header style={styles.header}>
				Thevy Mahal
			</header>
			<Footer/>
		</div>
	);
}