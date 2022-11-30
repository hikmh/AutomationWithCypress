describe('My First Test', () => {
    it('Visit Login Page', () => {
        cy.visit("https://www.linkedin.com/signup/");
        cy.contains("Make the most of your professional life");
        cy.get("span").should('have.class', 'join-form__form-body-agreement', 'contain', 'By clicking Agree & Join, you agree to the LinkedIn');
    });
    it("Contains Email or phone and Password input, and sign up button", () => {
        //check email 
        cy.get('label').should('have.class', 'input__label', 'contain', 'email or phone number');
        const email = cy.get("input[name='email-or-phone']");
        email.should("be.visible");
        email.should("have.attr", "type", "text");

        //check password
        cy.get('label').should('have.class', 'input__label', 'contain', 'Password (6 or more characters)');
        const password = cy.get("input[name='password']");
        password.should("be.visible");
        password.should("have.attr", "type", "password");

        //button
        const button = cy.get("button");
        button.should("be.visible");
        button.contains("Agree & Join");
    });

    it("Do sign up with null Value", () => {
        const button = cy.get("button[id='join-form-submit']");
        button.click();
        cy.on("window:alert", (text) => {
            expect(text).to.contains("Login Failed")
        });
    });

    it("Check User Agreement", () => {
        cy.contains('User Agreement').click();
    })
    it("Do Sign Up with google", () => {
        cy.contains('Sign in').click();
    })
    it("Check Privacy Policy", () => {
        cy.contains('Privacy Policy').click();
    })
    it("Check Cookie Policy", () => {
        cy.contains('Cookie Policy').click();
    });

});
