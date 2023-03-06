const LoginPage = require('./pages/LoginPage')

Feature('Zero Bank Application - E2E Test')

Before(({ I }) => {
  console.log('BEFORE HOOK')
  I.amOnPage('http://zero.webappsecurity.com/')
})

After(({ I }) => {
  console.log('AFTER HOOK')
})

Scenario('Login Test - Negative', ({ I, LoginPage }) => {
  I.click('#signin_button')
  LoginPage.asserLoginFormIsVisible()
  LoginPage.submitLogin('invalid_username', 'invalid_password')
  I.seeElement('.alert-error')
})
