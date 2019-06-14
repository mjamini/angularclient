import {UserFormPage} from './user-form.po';
import { browser, logging } from 'protractor';
describe('User From tests', () => {
    let page: UserFormPage;
    beforeEach(() => {
        page = new UserFormPage();
        page.navigateTo();
    })
    it('User add form should be valid name field',() => {
        page.getNameTextBox().sendKeys('jam');
        let name = page.getNameTextBox().getAttribute('class');  
        expect(name).toContain('ng-valid');  
    })
})