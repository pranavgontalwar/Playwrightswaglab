import { test, expect, Locator } from "@playwright/test";


test("Test SwagLab Site End To End Test", async ({page})=>{
    
    await page.goto("https://www.saucedemo.com/");
    const text:Locator =page.getByText('Swag Labs');
    await expect(text).toHaveText('Swag Labs');


    //Login page
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name :'login'}).click();
    // await page.locator('#login-button').click(); //This is also be used when proper locator is not found

    
    //After Login Verify on dashbboard 

    const dashboardtext:Locator = page.getByText('Swag Labs');
    await expect(dashboardtext).toHaveText('Swag Labs');

    
    //on dashboard click on Add to cart for few items
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator("#add-to-cart-sauce-labs-bike-light").click();

    const removebagpackitem:Locator =page.locator('#remove-sauce-labs-backpack');
    const removebikelightitem:Locator= page.locator('#remove-sauce-labs-bike-light');
    await expect(removebagpackitem).toHaveText('Remove');
    await expect(removebikelightitem).toHaveText('Remove');


    //Go to shipping card item and verify the added item present in that 
    await page.locator("#shopping_cart_container").click();
    const youraddecartitembikelight:Locator=page.getByText('Sauce Labs Bike Light');
    const youraddedcartitembackpack:Locator=page.getByText('Sauce Labs Backpack');
    await expect(youraddecartitembikelight).toHaveText('Sauce Labs Bike Light');
    await expect(youraddedcartitembackpack).toHaveText('Sauce Labs Backpack');

    
    //Click on checkout button and verify the checkout button
    await page.getByRole('button', {name :'Checkout'}).click();
    const oncheckoutpage:Locator=page.getByText('Checkout: Your Information');
    await expect(oncheckoutpage).toHaveText('Checkout: Your Information');


    //Checkout yor information : Fill up first/last name/zip code and click continue button
    await page.getByPlaceholder('First Name').fill('FIRST NAME');
    await page.getByPlaceholder('Last Name').fill('LAST NAME');
    await page.getByPlaceholder('Zip/Postal Code').fill('421012');
    await page.getByRole('button',{name:'Continue'}).click();

   
    //Verify the Checkout: Overview page
    await expect(page.getByText('Checkout: Overview')).toHaveText('Checkout: Overview');
    await expect(page.getByText('Sauce Labs Bike Light')).toHaveText('Sauce Labs Bike Light');
    await expect(page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    await expect(page.getByText('Sauce Labs Backpack')).toHaveText('Sauce Labs Backpack');
    await expect(page.getByText('Payment Information:')).toHaveText('Payment Information:');
    await expect(page.getByText('SauceCard #31337')).toHaveText('SauceCard #31337');
    await expect(page.getByText('Shipping Information:')).toHaveText('Shipping Information:');
    await expect(page.getByText('Free Pony Express Delivery!')).toHaveText('Free Pony Express Delivery!');
    await expect(page.getByText('Price Total')).toHaveText('Price Total');
    await expect(page.getByText('Total: $43.18')).toHaveText('Total: $43.18');

    
    //After verifying all Click on finish button
    await page.getByRole('button', {name : 'Finish'}).click();

    //Verify the oder conformation message
    await expect(page.getByText('Thank you for your order!')).toHaveText('Thank you for your order!');
    await expect(page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    await expect(page.getByRole('button',{name:'Back Home'})).toHaveText('Back Home');


    //Clcik on back button and go to dashboard page and verify the dashboard button
    await page.getByRole('button',{name:'Back Home'}).click();
    await expect(page.getByText('Swag Labs')).toHaveText('Swag Labs');
    await expect(page.getByText('Products')).toHaveText('Products');


    //logout operation
    await page.getByRole('button', {name:'Open Menu'}).click();
    await page.getByRole('link',{name:'Logout'}).click();

    //After logout verify login page
    await expect(page.getByText('Swag Labs')).toHaveText('Swag Labs');
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', {name:'Login'})).toHaveText('Login');
    //await expect(page.getByRole('button', {name:'Login'})).toHaveText('Login 12345'); //failed TC
});

test("Checking the sample test 2 and verifying the agian dashboard", async ({page})=>{
    
    await page.goto("https://www.saucedemo.com/");
    const text:Locator =page.getByText('Swag Labs');
    await expect(text).toHaveText('Swag Labs');


    //Login page
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name :'login'}).click();
    // await page.locator('#login-button').click(); //This is also be used when proper locator is not found

    
    //After Login Verify on dashbboard 

   const dashboardtext:Locator = page.getByText('Swag Labs');
   await expect(dashboardtext).toHaveText('Swag Labs');
   //await expect(dashboardtext).toHaveText('Swag Labs 123'); //Failed TC
});