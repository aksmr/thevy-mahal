import salle from '../../images/template_restaurant.png';
import './Header.css';

const styles = {
	header: {
		background:`url(${salle})`,
	},
}

export const Header = () => {
    return(
        <header className='section' id='header' style={styles.header}>
            <span>Thevy<br/>Mahal</span>
        </header>
    );
}