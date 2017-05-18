import { NinjaAngular2AppPage } from './app.po';

describe('ninja-angular2-app App', () => {
  let page: NinjaAngular2AppPage;

  beforeEach(() => {
    page = new NinjaAngular2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
