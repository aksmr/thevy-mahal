import PhoneIcon from '@mui/icons-material/Phone';

const style = {
    h1: {
        fontSize: '7vh',
    },
    parent: {
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        backgroundColor: 'whitesmoke',
        minHeight: '400px',
        boxSizing: "border-box",
        paddingTop: '40px',
    },
    strong: {
        color: '#d32f2f',
    },
    link: {
        textDecoration: 'none',
        color:'black'
    },
    phoneIcon: {
        fontSize: '50',
    },
    phone: {
        fontWeight: 'normal',
    },
}

export const Reservation = () => {
    return(
        <div style={style.parent} id="reservation">
            <h1 style={style.h1}>
                Faites votre<br/>
                <strong style={style.strong}>Réservation</strong>
            </h1>
            <a href='tel:+33155931678' style={style.link}>
                <PhoneIcon style={style.phoneIcon} />
                <h3 style={style.phone}>+33 1 55 93 16 78</h3>
            </a>
        </div>
    );
}