import { HeroprojectPage } from './app.po';

describe('heroproject App', function() {
  let page: HeroprojectPage;

  beforeEach(() => {
    page = new HeroprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
