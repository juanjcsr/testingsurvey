import { SurveysPage } from './app.po';

describe('surveys App', () => {
  let page: SurveysPage;

  beforeEach(() => {
    page = new SurveysPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
