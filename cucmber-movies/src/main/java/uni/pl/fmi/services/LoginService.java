package uni.pl.fmi.services;

import java.util.ArrayList;
import java.util.List;

import uni.pl.fmi.User;

public class LoginService {

	public static String login(String username, String password) {

		if (username == null && password == null) {
			return "���� �������� ������������� ��� � ������!";
		}

		if (username == null) {
			return "���� �������� ������������� ���!";
		}

		if (password == null) {
			return "���� �������� ������!";
		}

		List<User> users = getUsers();
		final boolean isUserMatch = users.stream()
				.anyMatch(user -> user.getUsername().equals(username) && user.getPassword().equals(password));

		return isUserMatch ? "��" : "������ ������������� ��� ��� ������!";
	}

	private static List<User> getUsers() {
		User user = new User();
		user.setPassword("Pass123");
		user.setUsername("Ivan");
		final List<User> result = new ArrayList<>();
		result.add(user);
		return result;
	}

}