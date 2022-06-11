import './Navbar.css'

const listPages = ["Carte", "Menu", "Boissons", "Accès", "Réservation", "Horaires"];
const stringToURL = (str_) => { return (str_.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(' ', '-')); }

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark" id="custom_navbar">
                <div className="container-lg">
                    <a className="navbar-brand" href="/thevy-mahal">Thevy Mahal</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasId" aria-controls="offcanvasId">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {listPages.map((page) => (
                                <li className="nav-item" key={page}>
                                    <a className="nav-link" aria-current="page" href={`#${stringToURL(page)}`}>{page}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasId" aria-labelledby="offcanvasThevyMahalLabel">
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id="offcanvasThevyMahalLabel">Thevy Mahal</h3>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    {listPages.map((page) => (
                        <li className="nav-item" key={page}>
                            <h4><a className="nav-link nav-link-offcanva" aria-current="page" href={`#${stringToURL(page)}`}>{page}</a></h4>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </>
    );
}