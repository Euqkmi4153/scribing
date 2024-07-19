import puppeteer from "puppeteer";
const browser=await puppeteer.launch({headless:true});
const page=(await browser.pages())[0];

await page.goto("https://static.mobility-operation-info.emetro-app.osakametro.co.jp/emetro/cache/common/app/operation?TRANSITION_SOURCE_KBN=2&TRANSITION_SOURCE_ID=BROWSER_SUBWAY_TOP&TRANSITION_SOURCE_URL=https://subway.osakametro.co.jp/guide/subway_information.php");

const osakametroArray = [];


await page.waitForSelector("#operation > div > div > div:nth-child(3) > div> div:nth-child(1) > div:nth-child(1) > div > img");

for (let i = 1;i<10;i++){
const img = await page.$$(`#operation > div > div > div:nth-child(3) > div> div:nth-child(${i}) > div:nth-child(1) > div > img`);
osakametroArray.push(await page.evaluate(element=>element.src,img[0]));

}

const arr=osakametroArray.map((url) => {
    return url.split("/")[url.split("/").length - 1];
 })

 console.log(arr);  


{ 御堂筋線 : "true", 四つ橋線 : "delay", 中央線 : "stop", 千日前線 : "true", 谷町線 : "true", 長堀鶴見緑地線 : "true", 堺筋線 : "true", 南港ポートタウン線 : "true", 大阪モノレール : "true" }
