import { Address } from "./Components/Address";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Horaires } from "./Components/Horaires/Horaires";
import { Map } from "./Components/Map";
import { Navbar } from "./Components/Navbar/Navbar";
import { Reservation } from "./Components/Reservation";

export const App = () => {
	return (
		<>
			<Navbar />
			<Header />
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