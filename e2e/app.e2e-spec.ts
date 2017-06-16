import { ZodiacNormaPage } from './app.po';

describe('zodiac-norma App', () => {
  let page: ZodiacNormaPage;

  beforeEach(() => {
    page = new ZodiacNormaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Book a room online'))
      .then(done, done.fail);
  });
});
