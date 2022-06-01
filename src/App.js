import { Address } from "./Components/Address";
import { Carte } from "./Components/Carte/Carte";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header/Header";
import { Horaires } from "./Components/Horaires/Horaires";
import { Map } from "./Components/Map";
import { Navbar } from "./Components/Navbar/Navbar";
import { Reservation } from "./Components/Reservation";
import { ScrollTop } from "./Components/ScrollTop";

export const App = () => {
	return (
		<>
			<ScrollTop/>
			<Navbar />
			<Header />
			<Carte/>
			<div className="map_and_resa" style={{position:'relative'}}>
				<Map/>
				<Address/>
				<Reservation/>
			</div>
			<Horaires/>
			<Footer />
		</>
	);
}