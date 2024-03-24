import '../css/nav_img.css'

const NavBarImg = ({ title, text }) => {

    //Dividir el texto en 2 se podria mejorar añadiendole un .Map
    const divicion = text.split(",")

    return (
        <div className="container-fluid img-fluid mt-1">
            <div className="banner-image text-left txt">
                <p className="display-1 text-white title">{title}</p>
                <p className="text-white">{divicion[0]}<br/>{divicion[1]}</p>
                <a href="#" type="button" className="btn btn-light btn btn-outline-dark">Acceder</a>
            </div>
        </div>

    )
}

export default NavBarImg