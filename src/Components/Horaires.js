const style = {
    h1: {
        fontSize: '7vh',
    },
    parent: {
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        minHeight: '300px',
        padding:'3%',
    },
    strong: {
        color: '#d32f2f',
    },
    table: {
    },
    th: {
        textAlign:'start',
        padding: '10px 100px',
    },
    td: {
        textAlign:'end',
        color: '#d32f2f',
        padding: '10px 100px',
    },
}

export const Horaires = () => {
    return(
        <div style={style.parent} id="horaires">
            <h1 style={style.h1}>
                Nos<br/>
                <strong style={style.strong}>Horaires d'ouverture</strong>
            </h1>
            <table style={style.table}>
                <tr>
                    <th style={style.th}>Lundi</th>
                    <td style={style.td}>11:00 - 15:00</td>
                </tr>
                <tr>
                    <th style={style.th}>Mardi</th>
                    <td style={style.td}>11:00 - 15:00</td>
                </tr>
                <tr>
                    <th style={style.th}>Mercredi</th>
                    <td style={style.td}>11:00 - 15:00</td>
                </tr>
                <tr>
                    <th style={style.th}>Jeudi</th>
                    <td style={style.td}>11:00 - 15:00</td>
                </tr>
                <tr>
                    <th style={style.th}>Vendredi</th>
                    <td style={style.td}>11:00 - 15:00</td>
                </tr>
                <tr>
                    <th style={style.th}>Samedi</th>
                    <td style={style.td}>Fermé</td>
                </tr>
                <tr>
                    <th style={style.th}>Dimanche</th>
                    <td style={style.td}>Fermé</td>
                </tr>
            </table>
        </div>
    );
}