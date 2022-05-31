import './Navbar.css'

const listPages = ["Carte", "Menu", "Boissons", "Accès", "Réservation", "Horaires"];
const stringToURL = (str_) => { return (str_.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()); }

export const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark">
            <div className="container-lg">
                <a className="navbar-brand" href="/">{`Thevy Mahal`.toUpperCase()}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
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
    );
}