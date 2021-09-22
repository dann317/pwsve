import { Page } from "playwright"
export class HomePage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }
    async getConsolidatedBalances(){
        const consolidatedBalancesMenuOption = this.page.locator("//span[@data-trans='CONSOLIDATE_BALANCES_TITLE']");
        await consolidatedBalancesMenuOption.click;
    }
}
