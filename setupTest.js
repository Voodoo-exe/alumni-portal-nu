const { By, Builder, until } = require("selenium-webdriver")
const { suite } = require("selenium-webdriver/testing")
const firefox = require("selenium-webdriver/firefox")
const assert = require("assert")

suite(function (env) {
  describe("Open firefox", function () {
    let driver

    before(async function () {
      let options = new firefox.Options()
      options.setBinary("C:\\Program Files\\Mozilla Firefox\\firefox.exe")
      driver = await new Builder()
        .setFirefoxOptions(options)
        .forBrowser("firefox")
        .build()
    })

    after(() => driver.quit())

    it("Goto Login and enter credentials, go to connect, verify search functionality", async function () {
      await driver.get("http://localhost:3000/login")
      await driver
        .findElement(By.name("email_address"))
        .sendKeys("avi3@gmail.com")
      await driver.findElement(By.name("password")).sendKeys("avisinha")

      await new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello World!"), 3000)
      })

      let login_button = await driver.findElement(By.name("login_button"))
      await login_button.click()

      await new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 3000)
      })

      await driver.get("http://localhost:3000/connect")
      // let connect = await driver.findElement(By.name("connect_link"))
      // await connect.click()

      await new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000)
      })

      let search_box = await driver.findElement(By.name("connect_search"))

      await search_box.sendKeys("Avi Apratim Sinha")

      await new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 4000)
      })

      let ele = await driver.wait(
        until.elementLocated(By.className("Text")),
        10000
      )
      let name = await ele.getText()
      assert.equal("Avi Apratim Sinha", name)
    })

    it("Check website is loaded and Website title matches", async function () {
      await driver.get("http://localhost:3000")

      let title = await driver.getTitle()
      assert.equal("NU Alumni Portal", title)

      await driver.manage().setTimeouts({ implicit: 4000 })

      let textBox = await driver
        .findElement(By.className("site-title"))
        .getText()

      assert.equal("NIIT UNIVERSITY", textBox)

      await new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000)
      })
    })
  })
})
