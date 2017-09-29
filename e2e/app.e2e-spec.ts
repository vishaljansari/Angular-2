import { ProjectDirectoryPage } from './app.po';

describe('project-directory App', function() {
  let page: ProjectDirectoryPage;

  beforeEach(() => {
    page = new ProjectDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
