function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return <div id={id} className="deep-purple darken-4 card grey-text">
        <div className="card-image waves-effect waves-block waves-light">
            {
                poster === 'N/A' ? (
                    <img className="activator" src={`https://via.placeholder.com/300x400?text=${title}`} />
                ) :
                    <img className="activator" src={poster} />
            }
        </div>
        <div className="card-content">
            <span className="card-title activator white-text">{title}</span>
            <p>{year} <span className="right">{type}</span></p>
        </div>
    </div>;
}

export { Movie };