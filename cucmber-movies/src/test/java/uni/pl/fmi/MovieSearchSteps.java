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
		searchModel.navigateToMe();
	}

	@Given("^������ �� ���������� �� ������� �� �����$")
	public void openFilmSearch() throws Throwable {
		//searchModel.searchMovie();
	}

	@When("^������� ��� �� ���� : \"([^\"]*)\"$")
	public void enterFilmName(String FilmName) throws Throwable {
		searchModel.setFilmname(FilmName);
	}

	@When("^������� ���� : \"([^\"]*)\"$")
	public void enterGenre(String genre) throws Throwable {
		searchModel.setGenre(genre);
	}

	@When("^������� ������ �� �������$")
	public void clickSearchButton() throws Throwable {
		searchModel.clickFilmSearchButton();
	}

	@Then("^����� �� ���� ���� � ���� ��������$")
	public void noFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage,searchModel.getLoginMessage());
	}

	@Then("^����� ������ ����� ���������� �� ���� ��������$")
	public void foundFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, searchModel.getLoginMessage());
	}

	@Then("^����� ������ �����$")
	public void allFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, searchModel.getLoginMessage());
	}

	
}