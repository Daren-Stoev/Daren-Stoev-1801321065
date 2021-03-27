package uni.pl.fmi;

import org.joda.time.DateTime;

public class Reservation {
	private DateTime time;
	private Movies movie;
	private User user;
	private int seat;
	
	public Reservation() {
	}
	
	public Reservation(DateTime time, Movies movie, User user, int seat) {
		super();
		this.time = time;
		this.movie = movie;
		this.user = user;
		this.seat = seat;
	}

	
	public DateTime getTime() {
		return time;
	}
	public boolean setTime(DateTime time) {
		  try {
				this.time = time;
				return true;
			} catch (Exception e) {
				return false;
			}
	}
	public Movies getMovie() {
		return movie;
	}
	public boolean setMovie(Movies movie) {
		try {
		this.movie = movie;
		return true;
		} catch(Exception e)
		{
			return false;
		}
		
	}
	public User getUser() {
		return user;
	}
	public boolean setUser(User user) {
		  try {
				this.user = user;
				return true;
			} catch (Exception e) {
				return false;
			}
	}
	public int getSeat() {
		return seat;
	}
	public boolean setSeat(int seat) {
		  try {
				this.seat = seat;
				return true;
			} catch (Exception e) {
				return false;
			}
	}
	
	

}
