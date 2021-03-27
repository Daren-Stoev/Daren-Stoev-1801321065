package uni.pl.fmi.models;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.DateTime;

import uni.pl.fmi.Movies;
import uni.pl.fmi.services.MovieService;

public class movieSearchModel {
	static String filmName;
	static String genre;
	static Object[] logMessage;
	static String message;
	static DateTime projection;

	public static void navigateToMe() {
		System.out.println("Навигирано е до страницата.");		
	}

	
	public String getFilmName() {

		return filmName;
	}

	public void setFilmname(String filmName) {
		this.filmName = filmName;
	}
	
	public DateTime getProjection() {

		return projection;
	}

	public void setProjection(DateTime proj) {
		this.projection = proj;
	}

	public String getGenre() {

		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	/*public String getMessage() {

		return message;
	}*/

	public static Object[] getLoginMessage() {

		return logMessage;
	}

	public static void clickFilmSearchButton() {
		return;
	}

	public static void clickSearchButton() {
		message = MovieService.SearchMovie(filmName,genre); 
	}

	public static Object getLoginMessageSerial() {
		return message;
	}

}