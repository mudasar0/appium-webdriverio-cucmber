import { $ } from '@wdio/globals'
//import {config} from '../../../wdio.conf';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        //const el_username='~test-Username'
        return $('~test-Username');
    }

    get inputPassword () {
        return $('~test-Password')
    }

    get btnLogin () {
        return $('~test-LOGIN');
    }
    getXPath(message) {
        return `//XCUIElementTypeStaticText[@label="${message}"]`;
    }
    // getXPath(message) {
    //     let xpath;
    //     if (global.testPlatform === 'android') {
    //         xpath = '//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView';
    //     } else if (global.testPlatform === 'ios') {
    //         xpath = '//android.widget.TextView[@text="PRODUCTS"]"]';
    //     } else {
    //         throw new Error('Unsupported platform configured');
    //     }
    
    //     return $(xpath);
    // }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

export default new LoginPage();
