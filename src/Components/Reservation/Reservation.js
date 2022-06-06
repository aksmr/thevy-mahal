import './Reservation.css';
import PhoneIcon from '@mui/icons-material/Phone';

const style = {
    phoneIcon: {
        fontSize: '50',
    },
}

export const Reservation = () => {
    return(
        <div className='section' id="reservation">
            <h1>
                Faites votre<br/>
                <strong>Réservation</strong>
            </h1>
            <a href='tel:+33155931678' >
                <PhoneIcon style={style.phoneIcon} />
                <h3>+33 1 55 93 16 78</h3>
            </a>
        </div>
    );
}