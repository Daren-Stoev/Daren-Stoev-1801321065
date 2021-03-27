package uni.pl.fmi.services;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.DateTime;

import uni.pl.fmi.Movies;

public class MovieService {

	String filmName;
	String genre;
	String message;
	
	private static List<Movies> getMovies(){
		Movies m1 = new Movies("dummyMovie1",2021,"comedy",DateTime.parse("04-4-2021 19:30:00"));
		Movies m2 = new Movies("dummyMovie2",2021,"action",DateTime.parse("04-4-2021 18:30:00"));
		
		List<Movies> movies = new ArrayList<>();
		movies.add(m1);
		movies.add(m2);
		
		return movies;
	}
	
	public static Movies searchMovieByName(String filmName) {
		List<Movies> movies = MovieService.getAllMovies();
		Movies Currentmovie =  movies.stream().filter(movie -> movie.getFilmName().equals(filmName)).findFirst().get();
		return Currentmovie;
		
	}
	
	public static String SearchMovie(String name,String genre) {
		
		Movies movie = searchMovieByName(name);
		
		/*List<Movies> moviename = new ArrayList<>();
		moviename.add(searchMovieByName(name));	
		List<Movies> moviegenre = new ArrayList<>();
		moviegenre.add(SearchMovieByGenre(genre));
		*/
		
		if(movie == null)
			return "Не е намерен филм със същото име!";
		else if(movie.getGenre() != genre)
			return "Не е намерен филм със същият жанр!";
		else 
			return "филмът е намерен";
	}


	public static Movies SearchMovieByGenre(String genre) {
		List<Movies> movies = MovieService.getAllMovies();
		Movies Currentmovie =  movies.stream().filter(movie -> movie.getGenre().equals(genre)).findFirst().get();
		return Currentmovie;
	}

	
	public static List<Movies> getAllMovies(){
		return getMovies();
	}

}
