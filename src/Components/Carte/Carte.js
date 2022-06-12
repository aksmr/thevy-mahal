import { useState } from 'react';
import './Carte.css';

const stringToKey = (str_) => { return (str_.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(" ", "_").replaceAll(",", "")); }
// const random = () => { return Math.random() * 256;}

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
    const handleOpen = () => setOpen(!isOpen)

    return (
        <div id='carte' className='reactComponent'>
            <details>
                <summary className='sCarte' title='Dérouler la carte...' onClick={handleOpen}>
                    <span>La Carte</span><br/>
                    <em>Cliquer pour {isOpen ? "fermer" : "dérouler"}...</em>
                </summary>
                <div className="container">
                    <div className='row'>
                        <div className="grid_item col-md-7 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_entrees">
                            <h3>Entrées</h3><br/>
                        {carte.entrees.map((item) => (
                            <div key={stringToKey(item)}>{item}</div>
                        ))}
                        </div>
                        <div className='col-md-5 col-sm-12'>
                            <div className="grid_item shadow-lg p-3 mb-5 bg-body rounded" id="grid_salades">
                                <h3>Salades</h3><br/>
                            {carte.salades.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                            </div>
                            <div className="grid_item shadow-lg p-3 mb-5 bg-body rounded" id="grid_pains">
                                <h3>Pains</h3><br/>
                            {carte.pains.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className='row'>
                        <div className="grid_item grid_item col-12 shadow-none p-3 mb-5 bg-light rounded" id="grid_poissons">Nos Plats</div>
                    </div> */}

                    <div className='row'>
                        <div className="grid_item col-md-3 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_poissons">
                            <h3>Poissons <em>(crustacés)</em></h3><br/>
                        {carte.poissons.map((item) => (
                            <div key={stringToKey(item)}>{item}</div>
                        ))}
                            <br/>
                            <div><em>Accompagnement avec du riz Basmati safrané...</em></div>
                        </div>
                        <div className="grid_item col-md-4 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_poulet">
                            <h3>Poulet</h3><br/>
                        {carte.poulets.map((item) => (
                            <div key={stringToKey(item)}>{item}</div>
                        ))}
                        </div>
                        <div className="grid_item col-md-3 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_agneau_boeuf">
                            <h3>Agneau/Bœuf</h3><br/>
                        {carte.agneaus_boeufs.map((item) => (
                            <div key={stringToKey(item)}>{item}</div>
                        ))}
                        </div>
                    </div>

                    <div className='row'>
                        <div className="grid_item col-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_legumes">
                            <h3>Légumes</h3><br/>
                        {carte.legumes.map((item) => (
                            <div key={stringToKey(item)}>{item}</div>
                        ))}
                        </div>
                    </div>

                    <div className='row'>
                        <div className="grid_item col-md-5 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_biriani">
                            <h3>Biriani</h3><br/>
                        {carte.birianis.map((item) => (
                            <div key={stringToKey(item)}>{item}</div>
                        ))}
                        </div>
                        <div className="grid_item col-md-5 col-sm-12 offset-md-2 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_riz">
                            <h3>Riz</h3><br/>
                        {carte.riz.map((item) => (
                            <div key={stringToKey(item)}>{item}</div>
                        ))}
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
}