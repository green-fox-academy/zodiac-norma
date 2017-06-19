import { ZodiacNormaPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('zodiac-norma App', () => {
  let page: ZodiacNormaPage;

  beforeEach(() => {
    page = new ZodiacNormaPage();
  });

  // it('pages title should be ZodiacNorma', () => {
  //   expect(browser.getTitle()).toEqual('ZodiacNorma');
  //   });

  it('should display: Book a room online', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Book a room online'))
      .then(done, done.fail);
  });

  it('should find the buttonBox class', () => {
    let elem = element(by.css('.buttonBox'));
    expect(elem.isPresent()).toBeTruthy();
  });

  it('type of room initially should be Select a type of room', () => {
    let elem = element(by.css('.placehold'));
    expect(elem.getText()).toBe('Select a type of room');
  });

  it('datepicker placeholder initially should be DD/MM/YYYY', () => {
    let elem = element(by.css('my-date-picker'));
    expect(elem.getAttribute('placeholder')).toBe('DD/MM/YYYY');
  });

  it('adultInput initially should be 1', () => {
    let elem = element(by.css('#adultInput'));
    expect(elem.getAttribute('value')).toBe('1');
  });

  it('childInput initially should be 0', () => {
    let elem = element(by.css('#childInput'));
    expect(elem.getAttribute('value')).toBe('0');
  });



});
