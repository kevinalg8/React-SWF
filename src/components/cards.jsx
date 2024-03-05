const Card = ({title, parrafo, icono}) => {
    const icon = `bi bi-${icono}-circle-fill`
    return (
        <div className="col-xl-4 d-flex align-items-stretch">
            <div className="icon-box mt-4 mt-xl-0">
            <i className={icon}></i>
                <h4>{title}</h4>
                <p>
                    {parrafo}
                </p>
            </div>
        </div>
    )
};
//Para definir los props

export default Card