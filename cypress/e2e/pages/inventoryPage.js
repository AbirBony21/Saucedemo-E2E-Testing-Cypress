class InventoryPage {

    elements = {

        burgerMenuBtn: () => cy.get('#react-burger-menu-btn'),
        resetAppStateBtn: () => cy.get('#reset_sidebar_link'),
        crossBtn: () => cy.get('#react-burger-cross-btn'),
        logoutBtn: () => cy.get('#logout_sidebar_link'),

        addToCartButtons: () => cy.get('button.btn_inventory'),
        // firstProductSelectBtn: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        // secondProductSelectBtn: () => cy.get('#add-to-cart-sauce-labs-bike-light'),
        // thirdProductSelectBtn: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),

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

    // addProducts() {
    //     this.elements.firstProductSelectBtn().click()
    //     this.elements.secondProductSelectBtn().click()
    //     this.elements.thirdProductSelectBtn().click()
    // }

    addThreeProductsToCart() {
        this.elements.addToCartButtons().each(($el, index) => {
            if (index < 3) cy.wrap($el).click()
        })
    }

    goToCart() {
        this.elements.cartBtn().click()
    }

}

export default new InventoryPage()