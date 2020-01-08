// const MoovieList = () => {
//     return(
//
//     )
// }

import React from 'react'

class MovieList extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         count: 0
    //     }
    //
    //     // this.increment = this.increment.bind(this)
    //     // OR
    //     // can use onClick={() => this.increment()}
    //     // if increment = () =>  use as simple function as example - increment() {}
    // }
    //
    // increment = () => {
    //     // alert('Increment')
    //     const { count } = this.state
    //     // debugger
    //     this.setState({
    //         count: count + 1
    //     })
    //
    // }
    //
    // decrement = () => {
    //
    //     const count = this.state.count
    //     this.setState({ count: count - 1 })
    //
    // }

    shorten = (text, maxLengh) => {
        if (text && text.length > maxLengh)
        {
            return text.substr(0, maxLengh) + '...'
        }
        return text
    }

    renderMovies() {
        const { movies } = this.props

        return movies.map(movie =>
            (

                <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src={movie.image} alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">{movie.name}</a>
                            </h4>
                            <p className="card-text">{this.shorten(movie.description, 180)}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{movie.rating}</small>
                        </div>
                    </div>
                </div>
            )
        )
    }

    render() {
        // debugger

        // const movies = this.props.movies
        // OR can use
        // const { movies } = this.props
        return(
            <React.Fragment>
                { this.renderMovies() }

            </React.Fragment>
        )
    }
}

export default MovieList