import { useState } from "react";
import { Button } from "@mui/material";
import map from '../images/world_map.jpg';

const styles = {
    parent: {
        display:'grid',
		placeItems:'center',
        minHeight: '400px',
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${map})`,
        backgroundSize: 'fill',
		backgroundPosition: '50% 50%',
    },
    child: {
        textAlign: 'center',
        color:'white'
    }
};

export const Map = () => {
    const [validate, setValidate] = useState(false);

    const handleClick = () => {
        setValidate(!validate)
    }

    const mapNotVisible =
    <div style={styles.child}>
        <Button variant="contained" onClick={handleClick} color="error">Afficher la carte</Button>
        <div><em>Votre adresse IP sera envoyée à Google Maps.</em></div>
    </div>;

    const mapVisible =
    <>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.9216292677415!2d2.355939415557208!3d48.91688537929329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ebd78941077%3A0xd558b6a46b9bda1c!2sThevy%20Mahal!5e0!3m2!1sfr!2sfr!4v1652702771087!5m2!1sfr!2sfr" width="99.7%" height="400px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="restaurantMap"></iframe>
    </>;

    return(
        <div style={styles.parent} id="acces">
            { validate ? mapVisible : mapNotVisible}
        </div>
    );
}