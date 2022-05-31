// import './Navbar.css'

const listPages = ["Carte", "Menu", "Boissons", "Accès", "Réservation", "Horaires"];
const stringToURL = (str_) => { return (str_.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()); }

export const Navbar = () => {
    // return(
    //     <nav>
    //         <div className="logo">
    //             <h4>{`Thevy Mahal`.toUpperCase()}</h4>
    //         </div>

    //         <ul className='nav-links'>
    //             {listPages.map((page) => (
    //                 <li key={page}>
    //                     <a href={`#${stringToURL(page)}`}>{page}</a>
    //                 </li>
    //             ))}
    //         </ul>
    //     </nav>
    // );


    return (
        <>
            <nav className="navbar navbar-expand-md bg-light sticky-top">
                <div className="container-md">
                    <a className="navbar-brand" href="/">
                        {`Thevy Mahal`.toUpperCase()}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                {`Thevy Mahal`.toUpperCase()}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {listPages.map((page) => (
                                <li className="nav-item" key={page}>
                                    <a className="nav-link" aria-current="page" href={`#${stringToURL(page)}`}>{page}</a>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
        </>
    );
}