package uni.pl.fmi.models;

public class movieSearchModel {
	static String FilmName;
	static String genre;
	static 	Object[] logMessage;
	static Object message;
	static String SerialName;

	public static void navigateToMe() {
		System.out.println("���������� � �� ����������.");		
	}

	public static void searchMovie() {
		System.out.println("���������� � �� ����������.");
		
	}

	public static void movieName() {


		System.out.println("������� �� ���� � �����:"+FilmName+".");

	}

	public static void movieGenre() {
		System.out.println("������� �� ����:"+genre+".");
		
	}

	public static Object[] getLoginMessage() {

		return logMessage;
	}

	public static void clickFilmSearchButton() {
		return;
	}

	public static void navigateToMeSerial() {
		System.out.println("���������� � �� ���������� ��� �������.");		
		
	}

	public static void searchSerial() {
		System.out.println("���������� � �� ���������� �� �������.");		
		
	}

	public static void serialName() {
		System.out.println("������� �� ������ � �����:"+SerialName+".");
		
	}

	public static void serialGenre() {
		System.out.println("������� �� ����:"+genre+".");
		
	}

	public static Object getLoginMessageSerial() {
		return message;
	}

}