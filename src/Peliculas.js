const Peliculas = (props) => {
    return(
        <div>
            <img src={props.imagen}></img>
            <h1>{props.nombre}</h1>
            <p>{props.sinopsis}</p>
        </div>
    )
}

export default Peliculas;