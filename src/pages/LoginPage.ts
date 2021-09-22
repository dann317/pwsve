import { Page } from "playwright"
export class LoginPage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }
    async goToSVE(url){
        await this.page.goto(url);
    }

    async login(user, pwd){
        const usernameLabel = this.page.locator('//input[@id="InputUserName"]');
        const pwdLabel = this.page.locator('//input[@id="InputUserPassword"]');
        await usernameLabel.type(user);
        await pwdLabel.type(pwd);
        await this.page.keyboard.press("Enter");
        //await this.page.locator('//div/button[not(@disabled) and @id="ContinueButton"]').click;
    }

    async loginWithTkn(user, pwd, tkn){
        const usernameLabel = this.page.locator('//input[@id="InputUserName"]');
        const pwdLabel = this.page.locator('//input[@id="InputUserPassword"]');
        await usernameLabel.type(user);
        await pwdLabel.type(pwd);
        await this.page.keyboard.press("Enter");
        //const tokenLaber = this.page.locator('(//div[@class="lineBlack inputPass no-fill"])[1]');
        await this.page.type("//div[@id='b19-b5-b2-Column1']","1");    
        await this.page.type("//div[@id='b19-b5-b2-Column2']","1");    
        await this.page.type("//div[@id='b19-b5-b2-Column3']","1");    
        await this.page.type("//div[@id='b19-b5-b2-Column4']","1");    
        await this.page.type("//div[@id='b19-b5-b2-Column5']","1");    
        await this.page.type("//div[@id='b19-b5-b2-Column6']","1");    
        await this.page.press("//div[@id='b19-b5-b2-Column6']","Enter");    
    }

    async activateToken(tknSerial, token){
        const serialNumber = this.page .locator("//input[@id='b20-ActivationTokenStep1SerialNumberInput']");
        const confirmSerial = this.page.locator("//input[@id='b20-ActivationTokenStep1SerialConfirmationInput']");
        const activateTknButton = this.page.locator("//div/button[not(@disabled) and @id='b20-TokenActivationStep1ModalContinueButton']");
        const continueTknActivatedButton = this.page.locator("//div/button[@id='b22-TokenActivationStep3ModalContinueButton']");
        const tokenContinueButton = this.page.locator("//span[not(@disabled) and @id='b19-ContinueButton']");
        serialNumber.type(tknSerial);
        confirmSerial.type(tknSerial);
        activateTknButton.click();
        continueTknActivatedButton.click();
        this.page.keyboard.type(tknSerial);
        tokenContinueButton.click();
    }
}