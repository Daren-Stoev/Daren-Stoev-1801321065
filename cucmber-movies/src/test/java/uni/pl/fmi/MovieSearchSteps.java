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
		movieSearchModel.navigateToMe();
	}

	@Given("^Отваря се страницата за търсене на филми$")
	public void openFilmSearch() throws Throwable {
		movieSearchModel.searchMovie();
	}

	@When("^Въвежда име на филм : \"([^\"]*)\"$")
	public void enterFilmName(String FilmName) throws Throwable {
		movieSearchModel.movieName();
	}

	@When("^Въвежда жанр : \"([^\"]*)\"$")
	public void enterGenre(String genre) throws Throwable {
		movieSearchModel.movieGenre();
	}

	@When("^Натиска бутона за търсене$")
	public void clickSearchButton() throws Throwable {
		movieSearchModel.clickFilmSearchButton();
	}

	@Then("^Връща че няма филм с тези критерии$")
	public void noFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, movieSearchModel.getLoginMessage());
	}

	@Then("^Връща всички филми отговарящи на тези критерии$")
	public void foundFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, movieSearchModel.getLoginMessage());
	}

	@Then("^Връща всички филми$")
	public void allFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, movieSearchModel.getLoginMessage());
	}

	@Given("^Потребителят отваря търсачката за сериал$")
	public void потребителя_отваря_търсачката_за_сериал() throws Throwable {
		movieSearchModel.navigateToMeSerial();
	}

	@Given("^Отваря се страницата за търсене на сериал$")
	public void отваря_се_страницата_за_търсене_на_сериал() throws Throwable {
		movieSearchModel.searchSerial();
	}

	@When("^Въвежда име на сериал : \"([^\"]*)\"$")
	public void въвежда_име_на_сериал(String FilmName) throws Throwable {
		movieSearchModel.serialName();
	}
	

	@When("^Въвежда жанр на сериал: \"([^\"]*)\"$")
public void въвежда_жанр_на_сериал(String genre) throws Throwable {
		movieSearchModel.serialGenre();
}


	@Then("^Връща всички сериали$")
	public void връща_филми_всички_сериал(String expectedMessage) throws Throwable {
			assertEquals(expectedMessage, movieSearchModel.getLoginMessageSerial());
	}

	@Then("^Връща всички сериали отговарящи на тези критерии$")
	public void връща_сериал_с_тези_критерии(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, movieSearchModel.getLoginMessageSerial());
	}

	@Then("^Връща че няма сериал с тези критерии$")
	public void връша_че_няма_сериал_с_тези_критерии(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, movieSearchModel.getLoginMessageSerial());
	}
	
}