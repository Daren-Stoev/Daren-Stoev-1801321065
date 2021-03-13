package uni.pl.fmi.models;

public class movieSearchModel {
	static String FilmName;
	static String genre;
	static 	Object[] logMessage;
	static Object message;
	static String SerialName;

	public static void navigateToMe() {
		System.out.println("Навигирано е до страницата.");		
	}

	public static void searchMovie() {
		System.out.println("Навигирано е до търсачката.");
		
	}

	public static void movieName() {


		System.out.println("Търсене на филм с името:"+FilmName+".");

	}

	public static void movieGenre() {
		System.out.println("Търсене на жанр:"+genre+".");
		
	}

	public static Object[] getLoginMessage() {

		return logMessage;
	}

	public static void clickFilmSearchButton() {
		return;
	}

	public static void navigateToMeSerial() {
		System.out.println("Навигирано е до страницата със сериали.");		
		
	}

	public static void searchSerial() {
		System.out.println("Навигирано е до търсачката за сериали.");		
		
	}

	public static void serialName() {
		System.out.println("Търсене на сериал с името:"+SerialName+".");
		
	}

	public static void serialGenre() {
		System.out.println("Търсене на жанр:"+genre+".");
		
	}

	public static Object getLoginMessageSerial() {
		return message;
	}

}