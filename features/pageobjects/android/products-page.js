import { $ } from '@wdio/globals'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage {
    /**
     * define selectors using getter methods
     */
    get header () {
        return $('//android.widget.TextView[@text="PRODUCTS"]');
    }
    
}
export default new ProductsPage();