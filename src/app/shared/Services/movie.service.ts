import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
    //api_key:'027dd073ff9fa83407672a89590b229c'
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjdkZDA3M2ZmOWZhODM0MDc2NzJhODk1OTBiMjI5YyIsIm5iZiI6MTcyNjIyODk5Mi40NTkyNDksInN1YiI6IjY2ZTMwYmIzMDAwMDAwMDAwMGI5M2M4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MAehQNjmmceimL7CF8FCwRDo3auqwr2NJ9Kt3CFaxNw',
  },
};
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?',
      options
    );
  }

  // getTvShows() {
  //   return this.http.get('https://api.themoviedb.org/3/discover/tv', options);
  // }

  // getRatedMovies() {
  //   return this.http.get(
  //     'https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies',
  //     options
  //   );
  // }



  // getBannerDetail(id: number) {
  //   return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  // }

  // getNowPlayingMovies() {
  //   return this.http.get(
  //     'https://api.themoviedb.org/3/movie/now_playing',
  //     options
  //   );
  // }

  // getPopularMovies() {
  //   return this.http.get('https://api.themoviedb.org/3/movie/popular', options);
  // }

  // getTopRated() {
  //   return this.http.get(
  //     'https://api.themoviedb.org/3/movie/top_rated',
  //     options
  //   );
  // }

  // getUpcomingMovies() {
  //   return this.http.get(
  //     'https://api.themoviedb.org/3/movie/upcoming',
  //     options
  //   );
  // }
}
