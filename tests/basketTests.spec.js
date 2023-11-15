import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { MainPage, BasketPage } from '../src/pages/index';

test.beforeEach( async ({ page }) => {
    await allure.step('Добавление товаров в корзину', async () => {
        await page.goto('https://bstackdemo.com/');

        const mainPage = new MainPage(page);

        mainPage.addInBasket();
        await expect(page.getByText('2Bag')).toBeVisible();
        await page.reload({ waitUntil: 'domcontentloaded' });
    })
});

test.describe('Работа с корзиной', () => {
    test('Пользователь может удалить товары из корзины ', async ({ page }) => {
        await allure.epic('Работа с корзиной');
        await allure.story('Удаление  товаров');

        await page.goto('https://bstackdemo.com/');

        const basketPage = new BasketPage(page);
        basketPage.openBasket();
        basketPage.delete();
       
        await expect(page.getByText('Add some products in the bag :)')).toBeVisible();
    });

    test('Пользователь может изменить число товаров в корзине', async ({ page }) => {
        await allure.epic('Работа с корзиной');
        await allure.story('Добавление товаров в корзине');

        await page.goto('https://bstackdemo.com/');

        const basketPage = new BasketPage(page);
        basketPage.openBasket();
        basketPage.addPhoneInBasket();

        await expect(page.getByText('Apple Quantity: 2')).toBeVisible();
    })
})