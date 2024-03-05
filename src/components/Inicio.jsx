import Card from './cards.jsx';
import '../assets/css/inicio.css'
import Footer from './footer.jsx';
import Suplies from './suplies.jsx';

const Inicio = () => {
    return (
        <>
        <div id="why-us" className="why-us splash">
            <div className="container">
                <h1 className="mb-3">Conoce nuestra comunidad</h1>
                <p className="mt-3">
                    Nuestra página web se enfoca en resaltar la importancia
                    de crear una comunidad sólida que te acompañe en cada paso
                    de tu vida fitness.
                </p>
                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h2>¿Por qué elegir SWF?</h2>
                            <p>
                                Creemos firmemente en el poder de la comunidad y
                                entendemos que no es solo sobre el esfuerzo individual,
                                sino también sobre la conexión con otros apasionados por el fitness.
                            </p>
                            <div className="text-center">
                                <a href="#" className="more-btn">
                                    Entra a nuestro servidor<i className="bx bx-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <Card title="Comunidad de apoyo" parrafo="Nuestra página web se centra en la importancia de crear una comunidad sólida en el mundo fitness" icono={1}/>
                                <Card title="Canales de voz en Discord" parrafo="Ofrecemos canales de voz en Discord donde los miembros de nuestra comunidad pueden interactuar y compartir experiencias." icono={2}/>
                                <Card title="Recomendaciones de productos" parrafo="A través de nuestra página web, puedes explorar y descubrir nuevos productos de calidad" icono={3}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Suplies/>
         <Footer/>
         </>
    );
};

export default Inicio