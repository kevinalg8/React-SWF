const Suplies = () => { 

    return(
        <>
            <div id="about" className="about">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-xl-7">
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="public/img/sup.jpg" className="w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="public/img/equi.jpg" className="w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="public/img/vit.jpg" className="w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 content">
                            <h3>Suplementos y equipamento</h3>
                            <h2>Maximiza tu Potencial con Suplementos, Vitaminas y Equipamiento Deportivo</h2>
                            <p>Te ofrecemos una amplia selección de suplementos deportivos y equipamiento de calidad. Potencia tus entrenamientos y alcanza tus metas fitness con nuestra variedad de productos confiables y efectivos. Desde proteínas y vitaminas hasta pesas y accesorios, en SWF encontrarás todo lo que necesitas para llevar tu rendimiento al máximo nivel.</p>
                            <a href="#" className="read-more"><span>Ver Productos</span><i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

 }
 export default Suplies