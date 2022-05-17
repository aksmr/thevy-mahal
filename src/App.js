import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Map } from "./Components/Map";
import goTop from './images/icon_go-top.svg'

const style = {
	arrowTop: {
		textDecoration: 'none',
		color:'red',
		position: 'fixed',
		top:'86%',
		left:'90%',
		height:"10%",
		width:"10%",
		cursor: 'pointer',
	},
}

export const App = () => {
	return (
		<>
			<span id="top"></span>
			<Navbar />
			<Header />

			<span id="acces"></span>
			<Map/>

			<img
				src={goTop}
				alt="Go Top"
				onClick={() => window.location.href = '#top'}
				style={style.arrowTop}
			/>
			<Footer />
		</>
	);
}