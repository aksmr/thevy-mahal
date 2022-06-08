import { useState } from 'react';
import './Boissons.css';

const stringToKey = (str_) => { return (str_.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(" ", "_").replaceAll(",", "")); }
const boissons = {};

export const Boissons = () => {
    const [isOpen, setOpen] = useState(false)
    const handleOpen = () => setOpen(!isOpen)

    return(
        <div id='boissons'>
            <details>
                <summary className='sBoissons' title='Dérouler la liste de boissons...' onClick={handleOpen}>
                    <span>Les Boissons</span><br/>
                    <em>Cliquer pour {isOpen ? "fermer" : "dérouler"}...</em>
                </summary>
                <div className="container">
                    <div className='row'>
                        <div className="grid_item col-md-7 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_entrees">
                        </div>
                        <div className='col-md-5 col-sm-12'>
                            <div className="grid_item shadow-lg p-3 mb-5 bg-body rounded" id="grid_salades">
                            </div>
                            <div className="grid_item shadow-lg p-3 mb-5 bg-body rounded" id="grid_pains">
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="grid_item col-md-3 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_poissons">
                        </div>
                        <div className="grid_item col-md-4 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_poulet">
                        </div>
                        <div className="grid_item col-md-3 col-sm-12 offset-md-1 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_agneau_boeuf">
                        </div>
                    </div>

                    <div className='row'>
                        <div className="grid_item col-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_legumes">
                        </div>
                    </div>

                    <div className='row'>
                        <div className="grid_item col-md-5 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded" id="grid_biriani">
                        </div>
                        <div className="grid_item col-md-5 col-sm-12 offset-md-2 offset-sm-0 shadow-lg p-3 mb-5 bg-body rounded" id="grid_riz">
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
};