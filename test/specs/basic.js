const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('https://v5.webdriver.io')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })

    xit('should demonstrate the addValue command', async() => {
        await browser.url('https://v5.webdriver.io')
        let input = await $('#search_input_react')
        input.addValue('test')
        await browser.pause(4000);
        input.addValue(123)
        await browser.pause(2000);
    
        value = await input.getValue()
        assert(value === 'test123') // true
    })

   xit('should demonstrate  setValue command', function () {
        browser.url('https://v5.webdriver.io');
        const elem = $('#search_input_react');
        elem.setValue('test123');
        browser.pause(2000);
    })

    xit('should demonstrate the click command', async () => {
        await browser.url('https://v5.webdriver.io');
        const blogButton = await $('[href="/blog/"]')
        await browser.pause(2000);
        blogButton.click()
        await browser.pause(2000);
        const guideButton = await $('.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]')
        guideButton.click()
        await browser.pause(2000);
    })

    xit('should demonstrate the getAttribute command', async () => {
        await browser.url('https://v5.webdriver.io');
        const input = await $('#search_input_react');
        let attr = await input.getAttribute('title')
        console.log("Title attribute is: " + attr) // outputs: "Search"


        
        await input.setValue('test123');
        await browser.pause(2000);
        attr = await input.getValue('value')
        console.log("Value attribute is: " + attr) // outputs: test123
    })

    xit('should demonstrate the getLocation function', async () => {
        await browser.url('https://v5.webdriver.io');
        const logo = await $('#search_input_react')
        const location = logo.getLocation();
        console.log(location); 
    
        const xLocation = logo.getLocation('x')
        console.log("xLocation" + xLocation);
 
    });

    xit('should demonstrate the getText function', async () => {
        await browser.url('https://v5.webdriver.io');
        const blogButton = await $('[href="/blog/"]')
        console.log("Text for element:" + await blogButton.getText());
    });


    it('homework', async () => {
        await browser.url('https://v5.webdriver.io');
        const apiButton = await $('[href="/docs/api.html"]')
        await browser.pause(2000);
        apiButton.click()
       
        //document.location.href
        await browser.pause(2000);
        console.log("URL is : " + await browser.getUrl()); 
    
        const titleButton = await $('[class="postHeaderTitle"]')
        console.log("Text for Header Title:" + await titleButton.getText());

        const textJSON = await $('//*[text()="JSONWire protocol"]')
        let attr = await textJSON.getAttribute('href')
        console.log("Text for element:" + attr);

        let input = await $('#search_input_react')
        input.addValue('test is ')
        await browser.pause(4000);
        input.addValue('DONE')
        await browser.pause(5000);
 
    });


})