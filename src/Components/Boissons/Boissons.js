import { useState } from 'react';
import './Boissons.css';

const stringToKey = (str_) => { return (str_.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(" ", "_").replaceAll(",", "")); }
const boissons = {
    champagne: ["Cru Charles Chantrain"],
    blanc: [["Viognier vin de pays d'oc",""],["Muscadet sevre et maine",""],["Groover's","(vin de l'Inde)"]],
    rose: [["Cote de Provence","(cros d'aimar)"],["Pinot Noir","(cave de Turckheim)"], ["Tavel Groover's","(vin de l'Inde)"],["Coteau du Languedoc"]],
    rouge: [["Merlot","(vins de pays d'oc)"],["Cote du Rhone","(les pierres)"],["Gamay","(domaine bellevue)"],["Saumur Champigny","(domaines les maribelles)"],["Bordeaux","(château belleveu lugagnac)"],["Groover's","(vin de l'Inde)"],["Beaujolais Villages",""]],
    pichet: ["Rouge","Rose","Blanc"],
    aperitif:["Cocktails Thevy","Coupe de Champagne","Kir Royal","Kir","Martini","Gin","Ricard","Porto","Whiskey"],
    jus_boisson: ["Jus de fruit Tropical","Jus de Mangue","Jus de Fruits","Boissons Gazeuses","Perrier","Badoit","Eaux Minérales"],
    indienne: [["Lassi","(sucré ou salé)"],["Lassi à la Mangue",""],["Lassi à la Rosé", ""],["Chai","(thé à la cardamome)"],["Masala Chai","(thé parfumé)"]],
    chaudes: ["Café","Café au Lait","Thé","Thé Cur","Thé Citron","Thé Menthe"],
    digestif: [["Marie Brizard",""],["Cognac",""],["Liqueur Indien","(melon, mangue, lychée, thé)"],["Liqueur Banane",""]],
    biere: ["Kronenbourg","1664","Heineken","Bière Indienne"],
};

export const Boissons = () => {
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(!isOpen);

    return(
        <div id='boissons'>
            <details>
                <summary className='sBoissons' title='Dérouler la liste de boissons...' onClick={handleOpen}>
                    <span>Les Boissons</span><br/>
                    <em>Cliquer pour {isOpen ? "fermer" : "dérouler"}...</em>
                </summary>
                <div className="container">
                    <div className='row'>
                        <div className="grid_item col-md-3 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_rouges">
                            <h3>Vins Roses</h3><br/>
                        {boissons.rose.map((item) => (
                            <div key={stringToKey(item[0])}>{item[0]} <em>{item[1]}</em></div>
                        ))}
                        </div>
                        <div className="grid_item col-md-4 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_roses">
                            <h3>Vins Rouges</h3><br/>
                        {boissons.rouge.map((item) => (
                            <div key={stringToKey(item[0])}>{item[0]} <em>{item[1]}</em></div>
                        ))}
                        </div>
                        <div className='grid_item col-md-3 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded' id="grid_blanc">
                            <h3>Vins Blancs</h3><br/>
                        {boissons.blanc.map((item) => (
                            <div key={stringToKey(item[0])}>{item[0]} <em>{item[1]}</em></div>
                        ))}
                        </div>
                    </div>

                    <div className='row'>
                        <div className="grid_item col-md-5 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_champagne">
                            <h3>Champagnes</h3><br/>
                        {boissons.champagne.map((item) => (
                            <div key={stringToKey(item)}>{item}</div>
                        ))}
                        </div>
                        <div className="grid_item col-md-6 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_pichet">
                            <h3>Pichets <small><em>(25cL - 50cL)</em></small></h3><br/>
                        {boissons.pichet.map((item) => (
                            <div key={stringToKey(item)}>{item}</div>
                        ))}
                        </div>
                    </div>

                    <div className='row'>
                        <div className="grid_item col-md-3 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_aperitifs">
                            <h3>Apéritifs</h3><br/>
                            {boissons.aperitif.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                        </div>
                        <div className="grid_item col-md-4 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_indiennes">
                            <h3>Boissons Indiennes</h3><br/>
                        {boissons.indienne.map((item) => (
                            <div key={stringToKey(item[0])}>{item[0]} <em>{item[1]}</em></div>
                        ))}
                        </div>
                        <div className="grid_item col-md-3 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_jus_boissons">
                            <h3>Jus & Boissons</h3><br/>
                        {boissons.jus_boisson.map((item) => (
                            <div key={stringToKey(item)}>{item}</div>
                        ))}
                        </div>
                    </div>

                    <div className='row'>
                        <div className="grid_item col-md-3 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_chaudes">
                            <h3>Boissons Chaudes</h3><br/>
                            {boissons.chaudes.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                        </div>
                        <div className="grid_item col-md-4 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_digestifs">
                            <h3>Digestifs</h3><br/>
                        {boissons.digestif.map((item) => (
                            <div key={stringToKey(item[0])}>{item[0]} <em>{item[1]}</em></div>
                        ))}
                        </div>
                        <div className="grid_item col-md-3 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_bieres">
                            <h3>Bières</h3><br/>
                        {boissons.biere.map((item) => (
                            <div key={stringToKey(item)}>{item}</div>
                        ))}
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
};