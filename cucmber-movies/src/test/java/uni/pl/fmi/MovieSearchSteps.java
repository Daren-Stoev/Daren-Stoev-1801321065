package uni.pl.fmi;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pl.fmi.models.movieSearchModel;

public class MovieSearchSteps {
	
	movieSearchModel searchModel = new movieSearchModel();


	@Given("^Потребителят отваря търсачката за филми$")
	public void openLoginFilm() throws Throwable {
		searchModel.navigateToMe();
	}

	@Given("^Отваря се страницата за търсене на филми$")
	public void openFilmSearch() throws Throwable {
		//searchModel.searchMovie();
	}

	@When("^Въвежда име на филм : \"([^\"]*)\"$")
	public void enterFilmName(String FilmName) throws Throwable {
		searchModel.setFilmname(FilmName);
	}

	@When("^Въвежда жанр : \"([^\"]*)\"$")
	public void enterGenre(String genre) throws Throwable {
		searchModel.setGenre(genre);
	}

	@When("^Натиска бутона за търсене$")
	public void clickSearchButton() throws Throwable {
		searchModel.clickFilmSearchButton();
	}

	@Then("^Връща че няма филм с тези критерии$")
	public void noFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage,searchModel.getLoginMessage());
	}

	@Then("^Връща всички филми отговарящи на тези критерии$")
	public void foundFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, searchModel.getLoginMessage());
	}

	@Then("^Връща всички филми$")
	public void allFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, searchModel.getLoginMessage());
	}

	
}