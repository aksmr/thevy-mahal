const styles = {
    footer:{
        backgroundColor: "#2B2B2B",
        color: "white",
        minHeight: '5vh',
        display:'grid',
		placeItems:'center',
    },
}

export const Footer = () => {
    return (
        <footer style={styles.footer}>
            <small id='copyright'>Copyright &copy; {new Date().getFullYear()} - Tous droits réservés</small>
        </footer>
    );
}