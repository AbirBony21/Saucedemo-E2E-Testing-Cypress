class CheckoutPage {

    elements = {
        firstNameInput: () => cy.get('#first-name'),
        lastNameInput: () => cy.get('#last-name'),
        postalCodeInput: () => cy.get('#postal-code'),
        continueBtn: () => cy.get('#continue'),

        summaryTotal: () => cy.get('.summary_total_label'),
        finishBtn: () => cy.get('#finish'),
        successMessage: () => cy.get('.complete-header')
    }

    fillUserInfo(firstName, lastName, postalCode) {
        this.elements.firstNameInput().type(firstName)
        this.elements.lastNameInput().type(lastName)
        this.elements.postalCodeInput().type(postalCode)
        this.elements.continueBtn().click()
    }

    verifyTotalPrice() {
        this.elements.summaryTotal().should('contain', 'Total:')
    }

    clickFinish() {
        this.elements.finishBtn().click()
    }

    verifySuccessMessage() {
        this.elements.successMessage()
            .should('contain.text', 'Thank you for your order!')
    }
}

export default new CheckoutPage()
