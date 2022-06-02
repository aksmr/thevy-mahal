const stringToKey = (str_) => { return (str_.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(" ", "_").replaceAll(",", "")); }

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

    return (
        <details open>
            <summary>Notre Carte</summary>
            <div className="grid_container">
                <div className="grid_item" id="grid_entrees">
                    <ul>
                    {carte.entrees.map((entree) => (
                        <li key={stringToKey(entree)}>{entree}</li>
                    ))}
                    </ul>
                </div>
                <div className="grid_item" id="grid_salades">
                    <ul>
                    {carte.salades.map((salade) => (
                        <li key={stringToKey(salade)}>{salade}</li>
                    ))}
                    </ul>
                </div>
                <div className="grid_item" id="grid_pains">
                    <ul>
                    {carte.pains.map((pain) => (
                        <li key={stringToKey(pain)}>{pain}</li>
                    ))}
                    </ul>
                </div>
                <div className="grid_item" id="grid_poissons">
                    <ul>
                    {carte.poissons.map((poisson) => (
                        <li key={stringToKey(poisson)}>{poisson}</li>
                    ))}
                    </ul>
                </div>
                <div className="grid_item" id="grid_poulet">
                    <ul>
                    {carte.poulets.map((poulet) => (
                        <li key={stringToKey(poulet)}>{poulet}</li>
                    ))}
                    </ul>
                </div>
                <div className="grid_item" id="grid_agneau_boeuf">
                    <ul>
                    {carte.agneaus_boeufs.map((agneau_boeuf) => (
                        <li key={stringToKey(agneau_boeuf)}>{agneau_boeuf}</li>
                    ))}
                    </ul>
                </div>
                <div className="grid_item" id="grid_legumes">
                    <ul>
                    {carte.legumes.map((legume) => (
                        <li key={stringToKey(legume)}>{legume}</li>
                    ))}
                    </ul>
                </div>
                <div className="grid_item" id="grid_biriani">
                    <ul>
                    {carte.birianis.map((biriani) => (
                        <li key={stringToKey(biriani)}>{biriani}</li>
                    ))}
                    </ul>
                </div>
                <div className="grid_item" id="grid_riz">
                    <ul>
                    {carte.riz.map((rizItem) => (
                        <li key={stringToKey(rizItem)}>{rizItem}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </details>
    );
}