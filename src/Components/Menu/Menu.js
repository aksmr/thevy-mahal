import { useState } from 'react';
import './Menu.css';

const stringToKey = (str_) => { return (str_.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(" ", "_").replaceAll(",", "")); }
const menu = {
    vegetarien: {
        prix: 15.5,
        entree: ["Salade Thevy","Beignets aux Légumes","Samossa Légumes"],
        plat: ["Curry de Pomme de terre","Bengen Burta","Curry d'Épinards"],
        dessert: ["Pâtisserie Maison","Glace","Salade de Fruits"],
    },
    menu_22: {
        prix: 22,
        entree: ["Poulet Tikka","Salade Thevy","Sheekh Kebab"],
        plat: ["Agneau Vindail","Poulet Korma","Boeuf Thevy"],
        dessert: ["Pâtisserie Maison","Glace Indienne","Coupe de Thevy","Salade de Fruits"],
    },
    menu_1450: {
        prix: 14.5,
        entree: ["Mixed Vegetable Pakoda","Salade Thevy","Tangri Kebab"],
        plat: ["Poulet Thevy","Curry Boeuf","Murgh Makhani"],
        dessert: ["Pâtisserie Maison","Glace","Salade de Fruits"],
    },
    formule_express: {
        prix: 17,
        entree: ["Tangri Kebab","Samossa Légumes"],
        plat: ["Agneau Curry","Curry d'Épinards"],
        dessert: ["Pâtisserie Maison", "Glace","Café"],
    },
    menu_990: {
        prix: 9.9,
        entree: ["Allo Bhaja","Oignons Bhaja","Bengen Bhaja"],
        plat: ["Poulet au Curry","Dal Mix"],
        dessert: ["Pâtisserie Maison"],
    },
    thali: {
        prix: 10,
        plat: ["Crudités","Dal Mix","Poulet ou Agneau Korma","Riz Basmati","Nan fromage"],
    }
}

export const Menu = () => {
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(!isOpen)
    
    return(
        <div id='menu' className='reactComponent'>
            <details id='detailsMenu'>
                <summary className='sMenu' title='Dérouler le menu...' onClick={handleOpen}>
                    <span>Nos Menus</span><br/>
                    <em>Cliquer pour {isOpen ? "fermer" : "dérouler"}...</em>
                </summary>
                <div className="container">
                    <div className='row'>
                        <div className="grid_item col-md-3 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_menu_22">
                            <h3>Menu ({menu.menu_22.prix} €)</h3>

                            <br/><h4>Entrées (au choix)</h4>
                            {menu.menu_22.entree.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                            <div><em>Accompagnement avec nan fromage...</em></div>

                            <br/><h4>Plats (au choix)</h4>
                            {menu.menu_22.plat.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                            <div><em>Accompagnement avec du riz Basmati safrané...</em></div>

                            <br/><h4>Desserts (au choix)</h4>
                            {menu.menu_22.dessert.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                        </div>

                        <div className="grid_item col-md-4 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_menu_vegetarien">
                            <h3>Menu Végétarien ({menu.vegetarien.prix.toFixed(2)} €)</h3>

                            <br/><h4>Entrées (au choix)</h4>
                            {menu.vegetarien.entree.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                            <div><em>Accompagnement avec nan fromage...</em></div>

                            <br/><h4>Plats (au choix)</h4>
                            {menu.vegetarien.plat.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                            <div><em>Accompagnement avec du riz Basmati safrané...</em></div>

                            <br/><h4>Desserts (au choix)</h4>
                            {menu.vegetarien.dessert.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                        </div>

                        <div className="grid_item col-md-3 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_menu_1450">
                            <h3>Menu ({menu.menu_1450.prix.toFixed(2)} €)</h3>

                            <br/><h4>Entrées (au choix)</h4>
                            {menu.menu_1450.entree.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                            <div><em>Accompagnement avec nan fromage...</em></div>

                            <br/><h4>Plats (au choix)</h4>
                            {menu.menu_1450.plat.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                            <div><em>Accompagnement avec du riz Basmati safrané...</em></div>

                            <br/><h4>Desserts (au choix)</h4>
                            {menu.menu_1450.dessert.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                        </div>
                    </div>

                    <div className='row'>
                        <div className="grid_item col-md-3 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_menu_990">
                            <h3>Menu ({menu.menu_990.prix.toFixed(2)} €)</h3>

                            <br/><h4>Entrées (au choix)</h4>
                            {menu.menu_990.entree.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}

                            <br/><h4>Plats (au choix)</h4>
                            {menu.menu_990.plat.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                            <div><em>Accompagnement avec du riz Basmati safrané...</em></div>

                            <br/><h4>Desserts (au choix)</h4>
                            {menu.menu_990.dessert.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                        </div>

                        <div className="grid_item col-md-4 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_menu_express">
                            <h3>Formule Express ({menu.formule_express.prix} €)</h3>

                            <br/><h4>Entrées (au choix)</h4>
                            {menu.formule_express.entree.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                            <div><em>Accompagnement avec nan fromage...</em></div>

                            <br/><h4>Plats (au choix)</h4>
                            {menu.formule_express.plat.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                            <div><em>Accompagnement avec du riz Basmati safrané...</em></div>

                            <br/><h4>Desserts (au choix)</h4>
                            {menu.formule_express.dessert.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                        </div>

                        <div className="grid_item col-md-3 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_menu_1450">
                            <h3>Spécialité Thali ({menu.thali.prix} €)</h3>

                            <h4>Plats (au choix)</h4>
                            {menu.thali.plat.map((item) => (
                                <div key={stringToKey(item)}>{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
}