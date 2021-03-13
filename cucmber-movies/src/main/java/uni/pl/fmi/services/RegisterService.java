package uni.pl.fmi.services;

import java.util.ArrayList;
import java.util.List;

import uni.pl.fmi.User;

public class RegisterService {

	public static String register(String username, String password, String password2, String email) {

		if (null == username || "".equals(username)) {
			return "Въведете потребителско име";
		}

		if (null == email || email.isEmpty()) {
			return "Въведете електронна поща";
		}
		
		if (null == password2 || password2.isEmpty()) {
			return "Потвърдете паролата";
		}
		
		if (password != password2) {
			return "Паролите не съвпадат!";
		}

		final User newUser = new User(username, password, email);

		List<User> users = getUsers();
		boolean isUsernameExists = users.stream().anyMatch(u -> u.getUsername().equals(username));
		if (isUsernameExists) {
			return "Потребителското име е заето";
		}

		users.add(newUser);
		return users.contains(newUser) ? "Успешно се регистрирахте" : "Възникна грешка!Моля,опитайте отново.";
	}

	private static List<User> getUsers() {

		final List<User> result = new ArrayList<>();
		final User user = new User("user2", "pass", "test1@gmail.com");
		result.add(user);

		return result;
	}
}