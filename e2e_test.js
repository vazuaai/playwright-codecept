Feature('Zero Bank Application - E2E Test')

Before(({ I }) => {
  console.log('BEFORE HOOK')
  I.amOnPage('http://zero.webappsecurity.com/')
})

After(({ I }) => {
  console.log('AFTER HOOK')
})

Scenario('Login Test - Negative', ({ I }) => {
  I.click('#signin_button')
  I.seeElement('#login_form')
  I.fillField('#user_login', 'invalid_username')
  I.fillField('#user_password', 'invalid_password')
  I.click('.btn-primary')
  I.seeElement('.alert-error')
})
