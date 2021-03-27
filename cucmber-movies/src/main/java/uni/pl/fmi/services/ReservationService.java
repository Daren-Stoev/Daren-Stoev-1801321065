package uni.pl.fmi.services;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.DateTime;

import uni.pl.fmi.Movies;
import uni.pl.fmi.Reservation;
import uni.pl.fmi.User;

public class ReservationService {
	
	private static List<Movies> movies = MovieService.getAllMovies();
	private static List<User> users = RegisterService.getAllUsers();
	
	private static List<Reservation> GetReservations(){
		
		final List<Reservation> result = new ArrayList<>();
		final Reservation res = new Reservation(DateTime.parse("02-1-2018 19:30:00"),movies.get(0),users.get(0), 22);
		result.add(res);

		return result;
	}
	
	
	public static String Reserve(DateTime time, Movies movie, User user, int seat) {
		
		if(movie == null)
		{
			return "Не съществува такъв филм!";
		}
		
	/*	if(DateTime.now()<movie.getProjection())
		{
			return "Съжаляваме но е прекалено късно да направите резервация за тази прожекция";
		}*/
		
		if(CheckSeats(seat, movie, time))
		{
			return "Мястото вече е заето";
		}
		
		if(seat > 120 || seat <= 0)
		{
			return"Мястото е невалидно!";
		}
		
		final Reservation newRes = new Reservation(time,movie,user,seat);
		List<Reservation> reservations = GetReservations();
		reservations.add(newRes);
		return "Резервацията беше успешна!"; 
	}
	
	public static boolean CheckSeats(int seat,Movies movie, DateTime time) {
		
		final List<Reservation> temp = GetReservations();
		
		for(int i = 0; i< temp.size(); i++)
		{
			if(temp.get(i).getMovie() == movie && temp.get(i).getTime() == time && temp.get(i).getSeat() == seat)
				return true;
		}
		return false;
		
	}
	
	
	
	

}
