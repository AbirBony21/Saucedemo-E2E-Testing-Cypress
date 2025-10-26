/// <reference types= 'cypress'/>

import loginPage from "./pages/loginPage"
import inventoryPage from "./pages/inventoryPage"
import cartPage from "./pages/cartPage"
import checkoutPage from "./pages/checkoutPage"

describe('Sample Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Verify that Login as Locked Out User shows error message', () => {

    loginPage.login('locked_out_user', 'secret_sauce')
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it.only('Verify successful Login journey as Standard User', () => {
    
    loginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
    inventoryPage.resetAppState()
    inventoryPage.addThreeProductsToCart()
    inventoryPage.goToCart()

    cartPage.verifyProductsInCart(3)
    cartPage.clickCheckout()

    checkoutPage.fillUserInfo('Md. Abir', 'Hossain', '1216')
    checkoutPage.verifyTotalPrice()
    checkoutPage.clickFinish()
    checkoutPage.verifySuccessMessage()

    inventoryPage.resetAppState()
    inventoryPage.logout()
  })

})