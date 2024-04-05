import '../css/productos.css'
import NavBar from './NavBar'
import Footer from './footer'
import { useEffect, useState } from 'react'


const Productos = () => {

    const url = 'https://api.mercadolibre.com/sites/MCO/search?nickname=TUMEJORCOMPRA0&limit=5'

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const products = data.results
                setProductos(products)
                console.log(products);
            }).catch(error => console.error("error al consumir la API" + error))
    }, [])

    return (
        <>
            <NavBar />
            <div id='about' className='about'>
                <div className="container">
                    <a target="_blank" href=" seller2.permalink %>"><h3> seller2.nickname</h3></a>
                    <div className="card-group cards-wrapper">
                            {productos.map(productos => (
                                <>
                                <div className='card'>
                                <img key={productos} src={productos.thumbnail} className='mx-auto img-fluid card-img-top' />
                                <div className='card-body'>
                                    <h5 className='clard-title'key={productos}>{productos.title}</h5>
                                    <p className='card-text' key={productos}>${productos.price}</p>
                                </div>
                                <div className='card-footer'>
                                    <a key={productos} href={productos.permalink} className='btn btn-prymary' target='_blank'>Comprar</a>
                                </div>
                                </div>
                                </>
                            ))
                            }
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Productos
