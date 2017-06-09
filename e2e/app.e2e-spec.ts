import { ZooAnimalTrackerPage } from './app.po';

describe('zoo-animal-tracker App', () => {
  let page: ZooAnimalTrackerPage;

  beforeEach(() => {
    page = new ZooAnimalTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
