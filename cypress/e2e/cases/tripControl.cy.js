import LoginPage from '../pages/loginPage';
import TripControl from '../pages/tripControl';

describe('Trip Control Test', () => {
  it('should open trip successfully', () => {
    const loginPage = new LoginPage();
    const tripControlPage = new TripControl();
    loginPage.login();
    tripControlPage.openTripDetail();
  });
});