import salle from '../images/template_restaurant.png';

const styles = {
	header: {
		background:`url(${salle})`,
		backgroundSize: 'fill',
		backgroundPosition: '50% 50%',
		minHeight: '95vh',
		display:'grid',
		placeItems:'center',
		title: {
			color:'white',
			fontSize:'10vh',
			textAlign: 'center',
		},
	},
}

export const Header = () => {
    return(
        <header style={styles.header}>
            <span style={styles.header.title}>Thevy<br/>Mahal</span>
        </header>
    );
}