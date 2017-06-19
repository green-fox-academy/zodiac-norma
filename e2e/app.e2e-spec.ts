import { ZodiacNormaPage } from './app.po';

describe('zodiac-norma App', () => {
  let page: ZodiacNormaPage;

  beforeEach(() => {
    page = new ZodiacNormaPage();
  });

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
});
