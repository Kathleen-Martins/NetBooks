const sinopse = (props) => {

    return (
        <div className="sinopse">
            <h1>NetBooks</h1>
            <img src={props.image} />
            <h2>{props.titulo}</h2>
            <h3>Autor:  {props.autor}</h3>
            <p>Ano de Publicação:  {props.ano}</p>
            <p>Sobre o autor:   {props.sobreautor}</p>
            <h3>Sinopse</h3>
            <p>{props.sinopse}</p>

        </div>
    )
}
export default sinopse;