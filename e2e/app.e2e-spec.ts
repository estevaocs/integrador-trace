import { IntegradorTracePage } from './app.po';

describe('integrador-trace App', () => {
  let page: IntegradorTracePage;

  beforeEach(() => {
    page = new IntegradorTracePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
