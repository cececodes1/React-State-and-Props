import React, { useState } from 'react';

const MoviesList = () => {
    // Task 1: Initialize state with a list of movies
    const [movies, setMovies] = useState([
        { title: 'Monsters Inc.', description: 'Monsters generate their citys power by scaring kids.', genre: 'Animation' },
        { title: 'Hocus Pocus', description: 'Two young women accidentally bring back the Sanderson Sisters.', genre: 'Horror' },
        { title: 'The Nightmare Before Christmas', description: ' the King of Halloween Town, discovers.', genre: 'Horror' },
        { title: 'Halloweentown', description: 'When a young girl living with her secret witch mother .', genre: 'Horror' }
]);

    const [showGenre, setShowGenre] = useState(false);
    const [activeMovie, setActiveMovie] = useState(null);

    // Task 2:  Conditional Rendering of Movie Details
    const toggleDetails = (index) => {
        setActiveMovie(activeMovie === index ? null : index);
    };

    // Task 3: Implementing Movie Removal
    const removeMovie = (index) => {
        const newMovies = movies.filter((_, i) => i !== index);
        setMovies(newMovies);
    };

    // Task 4: Toggling List View
    const toggleView = () => {
        setShowGenre(!showGenre);
    };

    return (
        <div>
            <button onClick={toggleView}>
                {showGenre ? "Show All Movies" : "Show Action Movies"}
            </button>
            <ul>
                {movies.filter(movie => !showGenre || movie.title.includes('Action')).map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                            {movie.title}
                        </span>
                        <button onClick={() => removeMovie(index)}>Remove</button>
                        {activeMovie === index && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;


