import { WokeWalletPage } from './app.po';

describe('woke-wallet App', () => {
  let page: WokeWalletPage;

  beforeEach(() => {
    page = new WokeWalletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
