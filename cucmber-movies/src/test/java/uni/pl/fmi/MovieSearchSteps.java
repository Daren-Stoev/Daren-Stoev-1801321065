package uni.pl.fmi;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pl.fmi.models.movieSearchModel;

public class MovieSearchSteps {
	
	movieSearchModel searchModel = new movieSearchModel();


	@Given("^������������ ������ ���������� �� �����$")
	public void openLoginFilm() throws Throwable {
		movieSearchModel.navigateToMe();
	}

	@Given("^������ �� ���������� �� ������� �� �����$")
	public void openFilmSearch() throws Throwable {
		movieSearchModel.searchMovie();
	}

	@When("^������� ��� �� ���� : \"([^\"]*)\"$")
	public void enterFilmName(String FilmName) throws Throwable {
		movieSearchModel.movieName();
	}

	@When("^������� ���� : \"([^\"]*)\"$")
	public void enterGenre(String genre) throws Throwable {
		movieSearchModel.movieGenre();
	}

	@When("^������� ������ �� �������$")
	public void clickSearchButton() throws Throwable {
		movieSearchModel.clickFilmSearchButton();
	}

	@Then("^����� �� ���� ���� � ���� ��������$")
	public void noFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, movieSearchModel.getLoginMessage());
	}

	@Then("^����� ������ ����� ���������� �� ���� ��������$")
	public void foundFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, movieSearchModel.getLoginMessage());
	}

	@Then("^����� ������ �����$")
	public void allFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, movieSearchModel.getLoginMessage());
	}

	@Given("^������������ ������ ���������� �� ������$")
	public void �����������_������_����������_��_������() throws Throwable {
		movieSearchModel.navigateToMeSerial();
	}

	@Given("^������ �� ���������� �� ������� �� ������$")
	public void ������_��_����������_��_�������_��_������() throws Throwable {
		movieSearchModel.searchSerial();
	}

	@When("^������� ��� �� ������ : \"([^\"]*)\"$")
	public void �������_���_��_������(String FilmName) throws Throwable {
		movieSearchModel.serialName();
	}
	

	@When("^������� ���� �� ������: \"([^\"]*)\"$")
public void �������_����_��_������(String genre) throws Throwable {
		movieSearchModel.serialGenre();
}


	@Then("^����� ������ �������$")
	public void �����_�����_������_������(String expectedMessage) throws Throwable {
			assertEquals(expectedMessage, movieSearchModel.getLoginMessageSerial());
	}

	@Then("^����� ������ ������� ���������� �� ���� ��������$")
	public void �����_������_�_����_��������(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, movieSearchModel.getLoginMessageSerial());
	}

	@Then("^����� �� ���� ������ � ���� ��������$")
	public void �����_��_����_������_�_����_��������(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, movieSearchModel.getLoginMessageSerial());
	}
	
}