import top from '../images/arrow_up.svg';

const style = {
    button: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'none',
        zIndex: '1000',
        borderRadius: '100px',
        transition: 'opacity 1s ease-out',
    },
    arrow: {
        filter: 'invert(1)',
        width: '3vw',
    }
}

export const ScrollTop = () => {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    window.onscroll = () => {
        scrollFunction();
    };
    const scrollFunction = () => {
        let mybutton = document.getElementById("btn-back-to-top");
        document.body.scrollTop > 70 || document.documentElement.scrollTop > 70 ? mybutton.style.display = "block" : mybutton.style.display = "none";
    }
    return(
        <button
            type="button"
            className="btn btn-danger btn-floating btn-lg"
            id="btn-back-to-top"
            onClick={backToTop}
            style={style.button}
        >
            <img alt='fleche' src={top} style={style.arrow} />
        </button>
    );
}