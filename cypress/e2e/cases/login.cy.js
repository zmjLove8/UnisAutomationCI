import LoginPage from '../pages/loginPage';

describe('Login Test', () => {
  it('should login successfully', () => {
    const loginPage = new LoginPage();
    loginPage.login();
  });
});