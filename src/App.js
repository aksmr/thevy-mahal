import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Map } from "./Components/Map";
import { Navbar2 } from "./Components/Navbar/Navbar2";

export const App = () => {
	return (
		<>
			{/* <Navbar /> */}
			<Navbar2 />
			<Header />
			<Map/>
			<Footer />
		</>
	);
}