import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Map } from "./Components/Map";


export const App = () => {
	return (
		<>
			<Navbar />
			<Header />

			<span id="acces"></span>
			<Map/>
			
			<Footer />
		</>
	);
}