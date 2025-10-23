class InventoryPage {

    elements = {

        burgerMenuBtn: () => cy.get('#react-burger-menu-btn'),
        resetAppStateBtn: () => cy.get('#reset_sidebar_link'),
        crossBtn: () => cy.get('#react-burger-cross-btn'),
        logoutBtn: () => cy.get('#logout_sidebar_link'),

        firstProductSelectBtn: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        secondProductSelectBtn: () => cy.get('#add-to-cart-sauce-labs-bike-light'),
        thirdProductSelectBtn: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),

        cartBtn: () => cy.get('.shopping_cart_link')
    }

    resetAppState() {
        this.elements.burgerMenuBtn().click()
        this.elements.resetAppStateBtn().click()
        this.elements.crossBtn().click()
    }

    logout() {
        this.elements.burgerMenuBtn().click()
        this.elements.logoutBtn().click()
    }

    addProducts() {
        this.elements.firstProductSelectBtn().click()
        this.elements.secondProductSelectBtn().click()
        this.elements.thirdProductSelectBtn().click()
    }

    goToCart() {
        this.elements.cartBtn().click()
    }

}

export default new InventoryPage()