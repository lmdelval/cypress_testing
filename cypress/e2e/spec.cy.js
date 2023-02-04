
describe('App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('home page can be opened', () => {
    cy.contains('SOLUCIONES')
  })
/*
  it('user can login', () => {
    cy.contains('Accede').click()
    cy.get('[data-test-id="login-form"] input[name="email"]').type(
      'djbarrueco@gmail.com'
    )
    cy.get('[data-test-id="login-form"] input[name="password"]').type(
      'Test1234'
    )
    cy.get('[data-test-id="login-form"] button[type="submit"]').click()
    cy.contains('Hola DAYRON JESUS')
  })*/
})