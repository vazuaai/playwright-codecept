Feature('Zero Bank Application - E2E Test')

Scenario('Login Test - Negative', ({ I }) => {
  I.amOnPage('http://zero.webappsecurity.com/')
  I.click('#signin_button')
  I.seeElement('#login_form')
  I.fillField('#user_login', 'invalid_username')
  I.fillField('#user_password', 'invalid_password')
  I.click('.btn-primary')
  I.seeElement('.alert-error')
})
