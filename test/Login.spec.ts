import { test, expect } from '@playwright/test'
import { LoginPage } from '../src/pages/LoginPage';

const loginTest = 
test(`Given I typed my credentials into sve
    When I enter with my token 
    Then I can see Saldos consolidados into the menu options`, async({page})=>{
    const loginPage = new LoginPage(page) ;
    await loginPage.goToSVE("/");
    await loginPage.loginWithTkn("pabloapr1", "Prueba.1", "111111");
    console.log("lo que tiene: "+page.locator("//div[@class='display-flex justify-space-between']").allInnerTexts)
    //expect(page.locator("//div[@class='display-flex justify-space-between']")).toContain("CONSOLIDATE_BALANCES_TITLE");
    expect(page.locator("//div[@class='ThemeGrid_Width9']")).toContain("CONSOLIDATE_BALANCES_TITLE");
    });

/*test(`Given I typed my user credentials 
    When I click the continue button
    Then I can see the label to enter my token`, async({page})=>{
    const loginPage = new LoginPage(page) ;
    await loginPage.goToSVE("/");
    await loginPage.login("user1su17281", "Prueba.4");
    const tokenSection = await page.locator("//div[@class='display-flex justify-space-between']").allInnerTexts;
    expect(tokenSection).toContainText("Ingrese clave de token");
    });*/