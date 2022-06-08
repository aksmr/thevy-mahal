import { Menu } from "./Components/Menu/Menu";
import { Address } from "./Components/Address";
import { Carte } from "./Components/Carte/Carte";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header/Header";
import { Horaires } from "./Components/Horaires/Horaires";
import { Map } from "./Components/Map";
import { Navbar } from "./Components/Navbar/Navbar";
import { Reservation } from "./Components/Reservation/Reservation";
import { ScrollTop } from "./Components/ScrollTop";
import { Carousel } from "./Components/Carousel/Carousel";

export const App = () => {
	return (
		<>
			<ScrollTop/>
			<Navbar />
			<Header />
			<Carte />
			<Menu />
			<div className="map_and_resa" style={{position:'relative'}}>
				<Map />
				<Address />
				<Reservation />
			</div>
			<Horaires />
			<Carousel />
			<Footer />
		</>
	);
}