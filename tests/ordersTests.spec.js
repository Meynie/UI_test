import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { MainPage, SignIn, Address } from "../src/pages/index";
import { AddressBuilder } from '../src/helpers/user.helper';

test.beforeEach( async ({ page }) => {
    await allure.step('Авторизация пользователя', async () => {
        await page.goto('https://bstackdemo.com/');

        const mainPage = new MainPage(page);
        const signinPage = new SignIn(page);
        

        await mainPage.signin();
        await signinPage.signin();    

        await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
        await page.reload({ waitUntil: 'domcontentloaded' });
        });
});

test.describe('Заказ и товары', () => {
    test('Авторизованный пользователь может сделать заказ', async ({ page }) => {
        await allure.epic('Оформление заказа');
        await allure.story('Успешное оформление заказа');
        
        await page.goto('https://bstackdemo.com/');

        const addressPage = new Address(page);        
        const newAddress = new AddressBuilder().setAddress().setFirstName().setLastName().setPostalCode().setState().build();

        await page.locator('[id="\\31 "]').getByText('Add to cart').click();
        await page.getByText('Checkout').click();

        await addressPage.fullForm(newAddress.firstName, newAddress.lastName, newAddress.address, newAddress.state, newAddress.postalCode);

        await expect(page.getByRole('button', { name: 'Continue Shopping »' })).toBeEnabled();
        });
    
    test('Пользователь может добавить телефоны в избранное и посмотреть их', async ({ page }) => {
        await allure.epic('Избранное');
        await allure.story('Добавить в избранное товары');
        
        await page.goto('https://bstackdemo.com/');

        const mainPage = new MainPage(page);

        await page.locator('[id="\\32 "]').getByLabel('delete').click();
        await page.locator('[id="\\33 "]').getByLabel('delete').click();
        await page.locator('[id="\\34 "]').getByLabel('delete').click();
        mainPage.favourite();

        await expect(page.getByText('3 Product(s) found.')).toBeVisible();
    })

    test('Неавторизованный пользователь не может сделать заказ', async ({ page }) => {
        await allure.epic('Оформление заказа');
        await allure.story('Нужно авторизоваться перед оформлением заказа');

        await page.goto('https://bstackdemo.com/');
        
        const mainPage = new MainPage(page);

        mainPage.logout();

        await page.locator('[id="\\31 "]').getByText('Add to cart').click();
        await page.getByText('Checkout').click();
        await expect(page.getByRole('button', { name: 'Log In' })).toBeEnabled();
    })
});

