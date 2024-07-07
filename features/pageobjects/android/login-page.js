import { $ } from '@wdio/globals'
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
    get errorMsg () {
        return $('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
        //test-Error message
    }
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
