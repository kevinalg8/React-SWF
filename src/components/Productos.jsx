import '../css/productos.css'
import NavBar from './NavBar'
import Footer from './footer'
import { useEffect } from 'react'

const url = 'https://api.mercadolibre.com/sites/MCO/search?nickname=TUMEJORCOMPRA0'

const productos = () => {
    return (
        <>
        <NavBar/>
            <div id="about" className="about">
                <div className="container">
                    <a target="_blank" href=""><h3>Hola</h3></a>
                    <div className="card-group cards-wrapper">
                        <div className="card" style={{width: "20rem"}}>
                            <img src="" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Hola 2</h5>
                                <p className="card-text">Texto</p>
                            </div>
                            <div className="card-footer">
                                <a target="_blank" href="" className="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about'>
            <div className="container">
            <a target="_blank" href=" seller2.permalink %>"><h3> seller2.nickname</h3></a>
            <div className="card-group cards-wrapper">
                <div className="card" style={{width: "20rem"}}>
                  <img src=" data2.thumbnail" className="card-img-top" alt="..."/> 
                  <div className="card-body">
                  <div className="card-body">
                    <h5 className="card-title"> data2.title</h5>  
                    <p className="card-text"> data2.price</p> 
                  </div>
                  <div className="card-footer">
                    <a target="_blank" href=" data2.permalink" className="btn btn-primary">Comprar</a>
                  </div>
                </div>
            </div>  
          </div>
        </div>
                
            </div>

            <Footer/>
        </>
    )
}
export default productos
