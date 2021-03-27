package uni.pl.fmi.models;

import org.joda.time.DateTime;

import uni.pl.fmi.Movies;
import uni.pl.fmi.User;
import uni.pl.fmi.services.MovieService;
import uni.pl.fmi.services.ReservationService;

public class ReservationPageModel {
	static DateTime time;
	static Movies movie;
	static User user;
	static int seat;
	static Object[] logMessage;
	static String message;
	
	public static void navigateToMe() {
		System.out.println("Навигирано е до страницата.");		
	}

	public static DateTime getTime() {
		return time;
	}

	public static void setTime(DateTime time) {
		ReservationPageModel.time = time;
	}

	public static Movies getMovie() {
		return movie;
	}

	public static void setMovie(Movies movie) {
		ReservationPageModel.movie = movie;
	}

	public static User getUser() {
		return user;
	}

	public static void setUser(User user) {
		ReservationPageModel.user = user;
	}

	public static int getSeat() {
		return seat;
	}

	public static void setSeat(int seat) {
		ReservationPageModel.seat = seat;
	}

	public static void clickReserveButton() {
		message = ReservationService.Reserve(time, movie, user, seat); 
	}

	public static Object getLoginMessageSerial() {
		return message;
	}

	
}
