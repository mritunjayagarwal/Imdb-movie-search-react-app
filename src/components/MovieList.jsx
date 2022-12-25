const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="image-container d-flex justify-content-start m3">
                    <img src={movie.poster} alt="movie" />
                </div>
            ))}
        </>
    )
}

export default MovieList;