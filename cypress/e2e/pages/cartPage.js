class CartPage {

    elements = {
        cartItem: () => cy.get('.cart_item'),
        checkoutBtn: () => cy.get('#checkout')
    }

    verifyProductsInCart(expectedCount) {
        this.elements.cartItem().should('have.length', expectedCount)
    }

    clickCheckout() {
        this.elements.checkoutBtn().click()
    }
}

export default new CartPage()