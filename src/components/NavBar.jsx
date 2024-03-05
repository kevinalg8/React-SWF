import '../assets/css/navbar.css'
import NavBarImg from './navbarimg.jsx'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-fluid fixed-top navbar-dark p-md-3 text-white">
                <div className="container">
                    <a href="#" className="navbar-brand brand ">StreetWiseFitness</a>
                    <button type="button" className="navbar-toggler" data-bs-target="#navbarNav" data-bs-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">Recetas de la comunidad</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">Planes de la comunidad</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">Cerrar Sesion</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <NavBarImg title="¿Que somos?" text="Somos un espacio dinámico donde usuarios y entrenadores se conectan,interactúan y crean una comunidad sólida para alcanzar sus metas fitness juntos."/>
        </>
    )
}

export default NavBar
