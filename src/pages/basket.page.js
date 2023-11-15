class BasketPage {
    constructor(page) {
        this.checkoutButton = page.getByRole('link', { name: 'Checkout' });
        this.deleteFirstButton = page.locator('.shelf-item__del').first();
        this.deleteButton = page.locator('.shelf-item__del');
        this.basketButton = page.locator("//span[contains(@class, 'bag__quantity')]");
        this.addButton = page.getByRole('button', { name: '+' });
    }

    async openBasket() {
        await this.basketButton.first().click();
    }
    async delete () {
        await this.deleteFirstButton.click();
        await this.deleteButton.click();
    }
    async addPhoneInBasket () {
        await this.addButton.first().click();
    }
}

export {BasketPage};