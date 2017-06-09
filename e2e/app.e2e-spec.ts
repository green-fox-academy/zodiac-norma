import { BookingFrontendNgPage } from './app.po';

describe('booking-frontend-ng App', () => {
  let page: BookingFrontendNgPage;

  beforeEach(() => {
    page = new BookingFrontendNgPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
