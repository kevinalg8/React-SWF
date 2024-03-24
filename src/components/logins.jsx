import { Link } from 'react-router-dom'
import '../css/login.css'

const login = () => { 
    return(
      <>
        <div className="cont">
        <div className="container">
          <div className="col-md-9 card mx-auto d-flex flex-row px-0">
            <div className="p-left d-md-flex flex-column d-none">
              <h1 className="text-white text text-center">Iniciar sesion</h1>
              <p className="text-white text-p">Conectados por el bienestar: Unidos en una comunidad fitness sin límites </p>
              <a href="/RegistroUsuario"><input type="button" className="btn btn-p d-block w-50 mt-3"
                  value='Registro Usuario'/></a>
            </div>
            <div className="card-body d-flex flex-column justify-content-center">
              <h4 className="title text-center mt-1 pb-3">Ingresar</h4>
              <form className='col-sm-10 col-12 mx-auto' action="auth" method="POST">
                <div className='form-group '>
                  <input id="Email" type="Email" className="form-control " placeholder='Email' max="25" name="CORREO"/>
                </div>
                <div className='form-group py-3 '>
                  <input id="Pass" type="password" className="form-control" placeholder='***' max="14" name="CONTRASENA"/>
                </div>
                <div className=''>
                  <input type="submit" className="btn d-block w-100" value="Ingresar"/>
                  <a href="/RegistroUsuario">
                    <p className="text-center mt-3">¿No tienes una cuenta?</p>
                  </a>
                </div>
                <div className=''>
                  <Link to={"/index"}>
                  <p className="text-center mt-3" value="">Continuar Sin Iniciar Sesion</p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          </div>
      </div>
      </>
    )
 }
export default login