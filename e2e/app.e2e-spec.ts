import { CountDownTimerPage } from './app.po';

describe('count-down-timer App', () => {
  let page: CountDownTimerPage;

  beforeEach(() => {
    page = new CountDownTimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
