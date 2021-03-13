package uni.pl.fmi;


public class Movies {
	/**
	 * Default constructor
	 */
	public Movies() {
	}

	public String getFilmName() {
		return FilmName;
	}

	public void setFilmName(String filmName) {
		FilmName = filmName;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getLenght() {
		return lenght;
	}

	public void setLenght(String lenght) {
		this.lenght = lenght;
	}

	/**
	 * 
	 */
	private String FilmName;

	/**
	 * 
	 */
	private int year;

	/**
	 * 
	 */
	private String genre;

	/**
	 * 
	 */
	private String lenght;

	/**
	 * 
	 */
}
