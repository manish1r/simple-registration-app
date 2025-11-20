const { Builder ,By , until}=require("selenium-webdriver");
(async function testAddition(){
    let driver=await new Builder().forBrowser("chrome").build();
    try{
        await driver.sleep(1500);
        await driver.get("file:///D:/sem5/DevOps_Lab/practice/simple-app/index.html");
        await driver.findElement(By.id("a")).sendKeys("10");
        await driver.findElement(By.id("b")).sendKeys("20");
        await driver.findElement(By.xpath("//button[text()='Add']")).click();
        let output=await driver.wait(
            until.elementLocated(By.id("result")),2000
        );
        await driver.sleep(1500);
        const text=await output.getText();
        if(text.includes("30")) console.log("Test passed");
        else console.log("Test Failed");
    }
    catch(ex){
        console.log("Exception ex: ",ex);
    }
    finally{
        await driver.quit();
    }
})();