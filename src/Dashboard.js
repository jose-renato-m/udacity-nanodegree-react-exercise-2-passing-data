import React, {Component} from "react";
import MovieCard from "./MovieCard";

class Dashboard extends Component {
  render() {
    const {usersByMovie, users, movies} = this.props;
    
    const movieCards = Object.keys(movies).map(id => (
      <MovieCard
        key={id}
        users={users}
        usersWhoLikedMovie={userByMovie[id]}
        movieInfo={movies[id]} />
    ));


  }
}

export default Dashboard;
