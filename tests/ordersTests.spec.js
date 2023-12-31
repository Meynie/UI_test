import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { MainPage, SignIn, AddressPage } from "../src/pages/index";
import { AddressBuilder } from '../src/helpers/user.helper';

test.beforeEach( async ({ page }) => {
    await allure.step('Авторизация пользователя', async () => {

        const mainPage = new MainPage(page);
        const signinPage = new SignIn(page);
        
        await mainPage.open();
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
        
        const addressPage = new AddressPage(page);    
        const mainPage = new MainPage(page);
    
        const newAddress = new AddressBuilder().setAddress().setFirstName().setLastName().setPostalCode().setState().build();

        await mainPage.addInBasket();
        await page.getByText('Checkout').click();

        await addressPage.fullForm(newAddress.firstName, newAddress.lastName, newAddress.address, newAddress.state, newAddress.postalCode);

        await expect(page.getByRole('button', { name: 'Continue Shopping »' })).toBeEnabled();
        });
    
    test('Пользователь может добавить телефоны в избранное и посмотреть их', async ({ page }) => {
        await allure.epic('Избранное');
        await allure.story('Добавить в избранное товары');
        
        const mainPage = new MainPage(page);

        await mainPage.favourite();

        await expect(page.getByText('2 Product(s) found.')).toBeVisible();
    })

    test('Неавторизованный пользователь не может сделать заказ', async ({ page }) => {
        await allure.epic('Оформление заказа');
        await allure.story('Неавторизованный пользователь не может сделать заказ');
        
        const mainPage = new MainPage(page);

        await mainPage.logout();
        await mainPage.addInBasket();

        await page.getByText('Checkout').click();
        await expect(page.getByRole('button', { name: 'Log In' })).toBeEnabled();
    })
});

