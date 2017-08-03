import { NewangularPage } from './app.po';

describe('newangular App', () => {
  let page: NewangularPage;

  beforeEach(() => {
    page = new NewangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
