package uni.pl.fmi.models;

import uni.pl.fmi.services.LoginService;

public class LoginPageModel {

	private String username;
	private String password;
	private String message;

	public void navigateToMe() {
		System.out.println("���������� � �� ���������� �� ���� � ���������.");
	}

	public void setUsername(String username) {
		this.username =username;
	}

	public void setPassword(String password) {
		this.password=password;
	}

	public void clickLoginButton() {
		message = LoginService.login(username, password);
	}

	public String getLoginMessage() {
		return message;
	}

}
