import './Horaires.css'

export const Horaires = () => {
    return (
        <div className="horairesParent" id="horaires">
            <h1>
                Nos
                <br />
                <strong>Horaires d'ouverture</strong>
            </h1>
            <br />
            <table>
                <tbody>
                    <tr>
                        <th>Lundi</th>
                        <td>11:00 - 15:00</td>
                    </tr>
                    <tr>
                        <th>Mardi</th>
                        <td>11:00 - 15:00</td>
                    </tr>
                    <tr>
                        <th>Mercredi</th>
                        <td>11:00 - 15:00</td>
                    </tr>
                    <tr>
                        <th>Jeudi</th>
                        <td>11:00 - 15:00</td>
                    </tr>
                    <tr>
                        <th>Vendredi</th>
                        <td>11:00 - 15:00</td>
                    </tr>
                    <tr>
                        <th>Samedi</th>
                        <td>Fermé</td>
                    </tr>
                    <tr>
                        <th>Dimanche</th>
                        <td>Fermé</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}