import '../css/RegistroUsuario.css'
import { Link } from 'react-router-dom'

const createAccount = () => {
  return (
    <body className="cont">
      <div className="container">
        <div className="col-md-9 card mx-auto d-flex flex-row px-0">
          <div className="p-left d-md-flex flex-column d-none">
            <h1 className="display-4 text-white text text-center">Registrarse</h1>
            <p className="font-weight-light text-p text-center text-white">Regístrate en StreetWise Fitness y accede a nuestra comunidad,planes, y recetas. Sin registro, no podrás disfrutar de las anteriores funcionalidades.</p>
            <Link to={"/"}>
                <input type="button" className="btn btn-p d-block w-60 mt-3"
                  value='Volver al inicio de sesion'/>
              </Link>
          </div>
          <div className="card-body d-flex flex-column justify-content-center">
            <h4 className="title text-center">Registro</h4>
            <form className='col-sm-10 col-12 mx-auto' action="guardar" method="POST">
              <div className="row">
                <div className='form-group col mt-3'>
                  <input type="text" className="form-control " placeholder='Nombres' max="60" id="Name" name="NOMBRES" />
                </div>
                <div className='form-group col mt-3'>
                  <input type="text" className="form-control" placeholder='Apellidos' max="60" id="lastName" name="APELLIDOS" />
                </div>
              </div>
              <div className="row">
                <div className='form-group col mt-3'>
                  <input type="number" className="form-control " placeholder='Celular' max="60" id="NumberPhone" name="CELULAR" />
                </div>
                <div className='form-group col mt-3'>
                  <input type="date" className="form-control" placeholder='Edad' max="60" id="Age" name="FECHA_NACIMIENTO" />
                </div>
              </div>
              <div className='form-group mt-3'>
                <input type="text" className="form-control" placeholder='Correo' max="60" id="Email" name="CORREO" />
              </div>
              <div className='form-group mt-3'>
                <input type="password" className="form-control" placeholder='Contraseña' max="8" id="Pass" name="CONTRASENA" />
              </div>
              <div className="row mt-3 text-center">
                <div className="col form-check">
                  <input className="form-check-input" type="radio" name="COD_ROL" id="exampleRadios1" value="Usuario" checked />
                  <label className="form-check-label">
                    Usuario
                  </label>
                </div>
                <div className="col form-check">
                  <input className="form-check-input" type="radio" name="COD_ROL" id="exampleRadios2" value="Entrenador" />
                  <label className="form-check-label">
                    Entrenador
                  </label>
                </div>
              </div>
              <div className=''>
                <button type="submit" className="btn  d-block w-100 mt-3" value='Ingresar'>Acceder</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>

  )
}
export default createAccount

