import { FirstHerokuAppPage } from './app.po';

describe('first-heroku-app App', () => {
  let page: FirstHerokuAppPage;

  beforeEach(() => {
    page = new FirstHerokuAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
