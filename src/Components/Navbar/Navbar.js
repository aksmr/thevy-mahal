import './Navbar.css'

const listPages = ["Carte", "Menu", "Vins", "Horaires", "Accès", "Réservation"];
const stringToURL = (str_) => { return(str_.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()); }

export const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                <h4>{`Thevy Mahal`.toUpperCase()}</h4>
            </div>
            
            <ul className='nav-links'>
                {listPages.map((page) => (
                    <li key={page}>
                        <a href={`#${stringToURL(page)}`}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}