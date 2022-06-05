import { useState } from 'react';
import './Carte.css';

const stringToKey = (str_) => { return (str_.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(" ", "_").replaceAll(",", "")); }
const random = () => { return Math.random() * 256;}

const carte = {
    entrees: ["Mixed Thevy","Boti Kebab","Poulet Tandoori","Poulet Tikka","Machili Tikka","Saumon Tikka","Gambas Tandoori","Beignets aux Crevettes","Samossa Légumes","Beignets aux Légumes Pakoda","Tangri Kebab","Mixed Vegetables, Bhaja"],
    salades : ["Salade Indienne","Kankri Raita","Salade Maison","Salade Thon"],
    pains : ["Nan","Kashmiri Nan","Nan au Fromage","Nan à l'Ail","Parota Nan","Masala Kulcha","Keema Nan"],
    poissons : ["Saumon Masala","Machili Masala","Gambas au Curry","Crevettes au Curry","Curry Kalamar"],
    poulets : ["Poulet au Curry","Poulet Korma","Poulet Kashmiri","Poulet Masala","Sauté de Poulet","Poulet aux Épinards","Makhani Tikka","Poulet Tikka Masala"],
    agneaus_boeufs : ["Agneau Vindail","Agneau aux Épinards","Agneau aux Aubergines","Agneau Curry","Agneau aux Pommes de terre","Agneau Korma","Boeuf Curry","Boeuf Thevy"],
    legumes:["Bengan Burta","Curry d'Épinards","Lentilles au Curry","Champignons Sautés","Curry de Pomme de terre"],
    birianis : ["Biriani Agneau","Biriani Poulet","Biriani aux Crevettes","Biriani Boeuf","Mixed Biriani"],
    riz :["Pulao Kashmiri","Pulao Légumes","Kushbue Chaval","Riz Blanc"],
}

export const Carte = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <details id='dCarte'>
            <summary className='sCarte' title='Dérouler la carte...' onClick={() => setOpen(!isOpen)}>{isOpen ? '⬇️' : '➡️'} Notre Carte {isOpen ? '⬇️' : '⬅️'}</summary>
            <div id='carte' className="container">
                <div className='row'>
                    <div className="grid_item col-md-6 col-sm-12" id="grid_entrees" style={{backgroundColor:`rgb(${random()},${random()},${random()})`}}>
                        <h3>Entrées</h3>
                    {carte.entrees.map((entree) => (
                        <div key={stringToKey(entree)}>{entree}</div>
                    ))}
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div className="grid_item" id="grid_salades" style={{backgroundColor:`rgb(${random()},${random()},${random()})`}}>
                            <h3>Salades</h3>
                        {carte.salades.map((salade) => (
                            <div key={stringToKey(salade)}>{salade}</div>
                        ))}
                        </div>
                        <div className="grid_item" id="grid_pains" style={{backgroundColor:`rgb(${random()},${random()},${random()})`}}>
                            <h3>Pains</h3>
                        {carte.pains.map((pain) => (
                            <div key={stringToKey(pain)}>{pain}</div>
                        ))}
                        </div>
                    </div>
                </div>
                
                <div className='row'>
                    <div className="grid_item col-md-4 col-sm-12" id="grid_poissons" style={{backgroundColor:`rgb(${random()},${random()},${random()})`}}>
                        <h3>Poissons <em>(crustacés)</em></h3>
                    {carte.poissons.map((poisson) => (
                        <div key={stringToKey(poisson)}>{poisson}</div>
                    ))}
                        <div><em>Accompagnement avec du riz Basmati safrané...</em></div>
                    </div>
                    <div className="grid_item col-md-4 col-sm-12" id="grid_poulet" style={{backgroundColor:`rgb(${random()},${random()},${random()})`}}>
                        <h3>Poulet</h3>
                    {carte.poulets.map((poulet) => (
                        <div key={stringToKey(poulet)}>{poulet}</div>
                    ))}
                    </div>
                    <div className="grid_item col-md-4 col-sm-12" id="grid_agneau_boeuf" style={{backgroundColor:`rgb(${random()},${random()},${random()})`}}>
                        <h3>Agneau/Bœuf</h3>
                    {carte.agneaus_boeufs.map((agneau_boeuf) => (
                        <div key={stringToKey(agneau_boeuf)}>{agneau_boeuf}</div>
                    ))}
                    </div>
                </div>

                <div className='row'>
                    <div className="grid_item col-12" id="grid_legumes" style={{backgroundColor:`rgb(${random()},${random()},${random()})`}}>
                        <h3>Légumes</h3>
                    {carte.legumes.map((legume) => (
                        <div key={stringToKey(legume)}>{legume}</div>
                    ))}
                    </div>
                </div>

                <div className='row'>
                    <div className="grid_item col-md-6 col-sm-12" id="grid_biriani" style={{backgroundColor:`rgb(${random()},${random()},${random()})`}}>
                        <h3>Biriani</h3>
                    {carte.birianis.map((biriani) => (
                        <div key={stringToKey(biriani)}>{biriani}</div>
                    ))}
                    </div>
                    <div className="grid_item col-md-6 col-sm-12" id="grid_riz" style={{backgroundColor:`rgb(${random()},${random()},${random()})`}}>
                        <h3>Riz</h3>
                    {carte.riz.map((rizItem) => (
                        <div key={stringToKey(rizItem)}>{rizItem}</div>
                    ))}
                    </div>
                </div>
            </div>
        </details>
    );
}