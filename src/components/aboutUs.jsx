import BigCards from "./bigCards"

const AboutUs = () => { 
    return (
        <>
                    <div id="about" className="about">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-xl-5 content">
                            <h3>Sobre Nosotros</h3>
                            <h2>StreetWiseFitness: <br />Conéctate, crea y transforma.</h2>
                            <p>Únete a la plataforma que conecta usuarios y entrenadores en una comunidad enérgica. A través de nuestro servidor de Discord, interactúa, comparte recetas saludables y contactar entrenadores. Descubre el poder de la conexión en tu viaje hacia una vida activa y saludable. ¡Con StreetWiseFitness, transforma tu bienestar hoy mismo!</p>
                            <a href="#" className="read-more"><span>Registrarme</span><i className="bi bi-arrow-right"></i></a>
                        </div>
                        <div className="col-xl-7">
                            <div className="row gy-4">
                                <BigCards icono="clipboard2-check" title="Recetas" text="Hemos integrado una función especial de creación de recetas, donde los miembros pueden compartir ideas saludables y deliciosas para ayudarte a mantener una alimentación balanceada"/>
                                <BigCards icono="cart2" title="Suplementos y Equipamiento" text="Tu fuente de suplementos y equipos deportivos para optimizar tu rendimiento y alcanzar tus metas fitness"/>
                                <BigCards icono="calendar-week" title="Planes" text="Nuestra plataforma ofrece planes creados por entrenadores que se adaptan a tus objetivos y necesidades individuales."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AboutUs