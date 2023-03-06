Feature('My test suite')

Scenario('Should load example.com website - 1. test', ({ I }) => {
  I.amOnPage('https://www.example.com')
  I.see('Example')
  I.dontSee('Google')
  I.seeElement('h1')
  I.dontSeeElement('#idontexist')
})

Scenario('Should load example.com website - 2. test', ({ I }) => {
  I.amOnPage('https://www.example.com')
  I.see('Example')
  I.dontSee('Google')
  I.seeElement('h1')
  I.dontSeeElement('#idontexist')
})

Scenario('Should load example.com website - 3. test', ({ I }) => {
  I.amOnPage('https://www.example.com')
  I.see('Example')
  I.dontSee('Google')
  I.seeElement('h1')
  I.dontSeeElement('#idontexist')
})
