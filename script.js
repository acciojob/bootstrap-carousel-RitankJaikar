//your code here
// Select the button specifically and click
cy.get('button.carousel-control-next').click(); // For next slide
cy.get('button.carousel-control-prev').click(); // For previous slide

// Verify the expected slide
cy.get('.fourth-slide').should('be.visible'); // Example for fourth slide
cy.get('.second-slide').should('be.visible'); // Example for second slide