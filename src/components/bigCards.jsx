const BigCards = ({title, text, icono}) => {
    const icon = `bi bi-${icono}`
    return (
        <div className="col-md-6">
            <div className="icon-box">
                <i className={icon}></i>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default BigCards