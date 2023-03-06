Feature('example')

Scenario('Should load example.com website', ({ I }) => {
  I.amOnPage('https://www.example.com')
  I.see('Example')
})
