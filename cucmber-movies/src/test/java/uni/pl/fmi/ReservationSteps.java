package uni.pl.fmi;

import static org.junit.Assert.assertEquals;

import org.joda.time.DateTime;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pl.fmi.models.RegisterPageModel;
import uni.pl.fmi.models.ReservationPageModel;

public class ReservationSteps {
	
	ReservationPageModel resModel = new ReservationPageModel();
	
	@Given("^Потребителят отваря страницата за резервации$")
	public void OpenReservationPage() throws Throwable {
		resModel.navigateToMe();
	}

	@Given("^Въвежда се времето на прожекцията : \"([^\"]*)\" $")
	public void EnterProjection(DateTime time) throws Throwable {
		resModel.setTime(time);
	}

	@When("^Въвежда името на желаният Филм : \"([^\"]*)\"$")
	public void enterMovieName(Movies movie) throws Throwable {
		resModel.setMovie(movie);
	}

	@When("^Въвежда се място : \"([^\"]*)\"$")
	public void enterSeat(int seat) throws Throwable {
		resModel.setSeat(seat);
	}

	@When("^Натиска бутона за резервация$")
	public void clickReserveButton() throws Throwable {
		resModel.clickReserveButton();
	}

	@Then("^Връща че нe съществува такъв филм $")
	public void noFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage,resModel.getLoginMessageSerial());
	}

	@Then("^Връща че мястото вече е заето$")
	public void SeatIsTaken(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage,resModel.getLoginMessageSerial());
	}

	@Then("^Връща че е твърде късно за резервация$")
	public void TooLate(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage,resModel.getLoginMessageSerial());
	}
	@Then("^Връща че мястото е невалидно$")
	public void InvalidSeat(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage,resModel.getLoginMessageSerial());
	}
	@Then("^Връща че Резервацията е успешна$")
	public void SuccessfulReservation(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage,resModel.getLoginMessageSerial());
	}

	
	

}
