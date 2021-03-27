package uni.pl.fmi;

import java.util.List;

import org.joda.time.DateTime;

public class Movies {
	private String FilmName;
	private int year;
	private String genre;
	private DateTime projection;

	public Movies() {
	}
	
	public Movies(String name, int year, String genre, DateTime projection) {
		super();
		this.FilmName = name;
		this.year = year;
		this.genre = genre;
		this.projection = projection;
	}

	public String getFilmName() {
		return FilmName;
	}

	public boolean setFilmName(String filmName) {
		  try {
				this.FilmName = filmName;
				return true;
			} catch (Exception e) {
				return false;
			}
	}

	public int getYear() {
		return year;
	}

	public boolean setYear(int year) {
		  try {
				this.year = year;
				return true;
			} catch (Exception e) {
				return false;
			}
	}

	public String getGenre() {
		return genre;
	}

	public boolean setGenre(String genre) {
		  try {
				this.genre = genre;
				return true;
			} catch (Exception e) {
				return false;
			}	}

	public DateTime getProjection() {
		return projection;
	}

	public boolean setProjection(DateTime proj) {
		  try {
				this.projection = proj;
				return true;
			} catch (Exception e) {
				return false;
			}
	}
}
