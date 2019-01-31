import { browser, element, by } from 'protractor';

export class AplicacaoTestePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('apt-root h1')).getText();
  }
}
