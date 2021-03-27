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
	
	@Given("^������������ ������ ���������� �� ����������$")
	public void OpenReservationPage() throws Throwable {
		resModel.navigateToMe();
	}

	@Given("^������� �� ������� �� ����������� : \"([^\"]*)\" $")
	public void EnterProjection(DateTime time) throws Throwable {
		resModel.setTime(time);
	}

	@When("^������� ����� �� �������� ���� : \"([^\"]*)\"$")
	public void enterMovieName(Movies movie) throws Throwable {
		resModel.setMovie(movie);
	}

	@When("^������� �� ����� : \"([^\"]*)\"$")
	public void enterSeat(int seat) throws Throwable {
		resModel.setSeat(seat);
	}

	@When("^������� ������ �� ����������$")
	public void clickReserveButton() throws Throwable {
		resModel.clickReserveButton();
	}

	@Then("^����� �� �e ���������� ����� ���� $")
	public void noFilmMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage,resModel.getLoginMessageSerial());
	}

	@Then("^����� �� ������� ���� � �����$")
	public void SeatIsTaken(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage,resModel.getLoginMessageSerial());
	}

	@Then("^����� �� � ������ ����� �� ����������$")
	public void TooLate(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage,resModel.getLoginMessageSerial());
	}
	@Then("^����� �� ������� � ���������$")
	public void InvalidSeat(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage,resModel.getLoginMessageSerial());
	}
	@Then("^����� �� ������������ � �������$")
	public void SuccessfulReservation(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage,resModel.getLoginMessageSerial());
	}

	
	

}
