import {devices, PlaywrightTestConfig} from "@playwright/test";
const config: PlaywrightTestConfig = {
    testMatch:"*.spec.ts",
    reporter: [["list"],["junit", {outputFile: "reports/result.xml"}]],
    timeout: 60000,
    retries:1,
    projects:[
    {
        name: 'Chrome',
        use:{
            browserName: 'chromium',
            channel: 'chrome',
        }
        
    }/*,
        {
            name: 'Mobile_Safari',
            use: devices['iPhone X'],
        }
        */
    ],
    use: {
        screenshot: "only-on-failure",
        video: "on-first-retry",
        baseURL:"https://apolo-osp-qa-ui.todo-1.com/BC_SVE_User/Login"
    }
}
export default config;