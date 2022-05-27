import LocationOnIcon from '@mui/icons-material/LocationOn';

const style = {
    parent: {
        backgroundColor: 'white',
        padding: '1.4%',
        width: '50%',
        textAlign: 'center',
        position: 'absolute',
        top: "43%",
        left:'25%',
        fontWeight:'bold',
    },
    icon: {
        fontSize:'50',
        color: '#d32f2f',
    }
}

export const Address = () => {
    return(
        <div style={style.parent}>
            <LocationOnIcon style={style.icon} />
            <br/>
            {"246 avenue du Président Wilson, 93210 Saint-Denis".toUpperCase()}, France
        </div>
    );
}