const { I } = inject()

module.exports = {
  // insert your locators
  loginForm: '#login_form',
  username: '#user_login',
  password: '#user_password',
  submitButton: '.btn-primary',

  //create methods
  submitLogin(username, password) {
    I.fillField(this.username, username)
    I.fillField(this.password, password)
    I.click(this.submitButton)
  },

  asserLoginFormIsVisible() {
    I.seeElement(this.loginForm)
  },
}
