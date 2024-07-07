import { $ } from '@wdio/globals'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage {
    /**
     * define selectors using getter methods
     */
    get header () {
        return $('//XCUIElementTypeStaticText[@name="PRODUCTS"]');
    }
    // getXpath(message) {
    //     let xpath;
    //     if (config.testPlatform === 'android') {
    //         xpath = '//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView';
    //     } else if (config.testPlatform === 'ios') {
    //         xpath = '//XCUIElementTypeStaticText[@name="PRODUCTS"]';
    //     } else {
    //         throw new Error('Unsupported platform configured');
    //     }
    
    //     return $(xpath);
    // }
    
    
}
export default new ProductsPage();