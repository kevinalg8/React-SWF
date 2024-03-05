const AboutUs = () => { 
    return (
        <>
                    <div id="about" className="about">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-xl-5 content">
                            <h3>Sobre Nosotros</h3>
                            <h2>StreetWiseFitness: Conéctate, crea y transforma.</h2>
                            <p>Únete a la plataforma que conecta usuarios y entrenadores en una comunidad enérgica. A través de nuestro servidor de Discord, interactúa, comparte recetas saludables y contactar entrenadores. Descubre el poder de la conexión en tu viaje hacia una vida activa y saludable. ¡Con StreetWiseFitness, transforma tu bienestar hoy mismo!</p>
                            <a href="#" className="read-more"><span>Registrarme</span><i className="bi bi-arrow-right"></i></a>
                        </div>
                        <div className="col-xl-7">
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <div className="icon-box">
                                        <i className="bi bi-clipboard2-check"></i>
                                        <h3>Recetas</h3>
                                        <p>Hemos integrado una función especial de creación de recetas, donde los miembros pueden compartir ideas saludables y deliciosas para ayudarte a mantener una alimentación balanceada</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="icon-box mt-3">
                                        <i className="bi bi-cart2"></i>
                                        <h3>Suplementos y Equipamiento</h3>
                                        <p>Tu fuente de suplementos y equipos deportivos para optimizar tu rendimiento y alcanzar tus metas fitness</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="icon-box mb-5">
                                        <i className="bi bi-calendar-week"></i>
                                        <h3>Planes</h3>
                                        <p>Nuestra plataforma ofrece planes creados por entrenadores que se adaptan a tus objetivos y necesidades individuales. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AboutUs