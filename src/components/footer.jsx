import '../css/footer.css'

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-about">
                            <a href="/" className="logo d-flex align-items-center">
                                <span>StreetWiseFitness</span>
                            </a>
                            <p>En nuestra comunidad fitness, promovemos la excelencia física y el bienestar integral. Unidos, creamos un entorno de apoyo y motivación para alcanzar la mejor versión de nosotros mismos.</p>
                            <div className="social-links d-flex mt-4">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 footer-links">
                            <h4>Enlaces Rapidos</h4>
                            <ul>
                                <li><a href="/inicio">Inicio</a></li>
                                <li><a href="../inicio/productos">Productos</a></li>
                                <li><a href="#">Recetas</a></li>
                                <li><a href="/registroUsuario">Crear Cuenta</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contactanos</h4>
                            <p>Medellin</p>
                            <p>Colombia</p>
                            <p className="mt-4"><strong>Celular:</strong> <span>324-562-1478</span></p>
                            <p><strong>Correo:</strong> <span>StreetWiseF@gmail.com</span></p>
                        </div>

                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer 