import { browser, by, element } from 'protractor';

export class UserFormPage {
    navigateTo() {
        return browser.get('/adduser');
    }
    getNameTextBox() {
        return element(by.name('name'));
    }
}