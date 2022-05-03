import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const textColor = "#fcfce4";
const styles = {
    footer:{
        backgroundColor: "#2B2B2B",
        color: textColor,
        minHeight: '10vh',
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
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <small id='copyright'>Copyright &copy; {new Date().getFullYear()} - Tous droits réservés</small>
                </Grid>
                <Grid item xs={12} sm={12} md={1} lg={1}>
                    <small class='link'>
                        <Link to={"/menus"} style={styles.link}>Menus</Link>
                    </small>
                </Grid>
                <Grid item xs={12} sm={12} md={1} lg={1}>
                    <small class='link'>
                        <Link to={"/carte"} style={styles.link}>Carte</Link>
                    </small>
                </Grid>
                <Grid item xs={12} sm={12} md={1} lg={1}>
                    <small class='link'>
                        <Link to={"/vins"} style={styles.link}>Vins</Link>
                    </small>
                </Grid>
                <Grid item xs={12} sm={12} md={1} lg={1}>
                    <small class='link'>
                        <Link to={"/acces"} style={styles.link}>Accès & Contact</Link>
                    </small>
                </Grid>
            </Grid>
        </footer>
    );
}