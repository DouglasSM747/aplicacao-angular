import { AplicacaoTestePage } from './app.po';

describe('aplicacao-teste App', function() {
  let page: AplicacaoTestePage;

  beforeEach(() => {
    page = new AplicacaoTestePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('apt works!');
  });
});
