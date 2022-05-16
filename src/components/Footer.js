import { Grid } from "@mui/material";
import React from "react";

const textColor = "#fcfce4";
const styles = {
    footer:{
        backgroundColor: "#2B2B2B",
        color: textColor,
        minHeight: '5vh',
        display:'grid',
		placeItems:'center',
    },
    link: {
        textDecoration: 'none',
        color: textColor,
    }
}

export const Footer = () => {
    return (
        <footer style={styles.footer}>
            <Grid
                container
                spacing={{xs:1,sm:1, md:2, lg:2}}
                justifyContent="space-around"
                alignItems="center"
                align='center'
            >
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <small id='copyright'>Copyright &copy; {new Date().getFullYear()} - Tous droits réservés</small>
                </Grid>
            </Grid>
        </footer>
    );
}