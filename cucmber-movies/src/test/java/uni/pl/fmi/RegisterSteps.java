package uni.pl.fmi;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pl.fmi.models.RegisterPageModel;

public class RegisterSteps {
	
	private RegisterPageModel registerScreen= new RegisterPageModel();
	
	@Given("^������������ ������ ������ �� �����������$")
	public void openRegisterScreen() throws Throwable {
		registerScreen.navigateToMe();
	}

	@When("^������ ������������� ���\"([^\"]*)\"$")
	public void addUsername(String username) throws Throwable {
		registerScreen.setUsername(username);
	}

	@When("^������ ������\"([^\"]*)\"$")
	public void addPassword(String password) throws Throwable {
		registerScreen.setPassword1(password);
	}

	@When("^������ �������� ��������\"([^\"]*)\"$")
	public void addPassowrd2(String password2) throws Throwable {
		registerScreen.setPassword2(password2);
	}

	@When("^������ ���������� ����\"([^\"]*)\"$")
	public void addEmail(String email) throws Throwable {
		registerScreen.setEmail(email);
	}

	@When("^������� ����� ������ �� �����������$")
	public void clickRegisterButton() throws Throwable {
		registerScreen.clickRegisterButton();
	}

	@Then("^����� ��������� \"([^\"]*)\"$")
	public void sheckRegisterMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, registerScreen.getRegisterMessage());
	}

}