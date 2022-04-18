describe('Check events', () => {

  beforeEach(function(){

    cy.visit('https://damian-events.coursedog.com/');

  });

  it('can only see events from a specific calendar date', function() {

    // select a specific date
    cy.chooseDate(10,'.id-2021-11-20');

    //check if I only have an event
    cy.get('#main-content > section').should('have.length', 1);

    //check if that event matches the date we choose before
    cy.get('#main-content').contains('Nov 20 2021');

  });

  it('see event from selected dates', function() {

    //click on today's events
    cy.get('.font-semibold > a').eq(2).click();

    //check that today has no events
    cy.get('#main-content > section').contains('No upcoming events');

    //choose Nov 20 2021
    cy.chooseDate(10,'.id-2021-11-20');

    //check that I have one event on Nov 20 2021
    cy.get('[data-test="event-card"]').should('have.length', 1);

  
    cy.chooseDate(8,'.id-2021-09-02');

    //check that are no events on Sep 2 2021
    cy.get('#main-content > section > div > h1 ').contains('No events found');

  });

  it('search input', function() {

    cy.chooseDate(10,'.id-2021-11-20');

    cy.get('nav input').type('tokyo{enter}');
  
    cy.get('#main-content > section > #search-results').contains('Tokyo');
  
  });

  it('filter for organization and see event information', function() {

    cy.chooseDate(10,'.id-2021-11-20');

    cy.get('#orgSelect').select('Model UN');

    cy.get('#main-content > section > #search-results > div').should('have.length', 4);

    cy.get('#main-content > section > #search-results > div').eq(3).click();

    cy.get('article > h1').contains('QA Task Submission');

    //add to calendar button
    cy.get('.flex.mt-2.mb-4 button').contains('Add to calendar');

    //add to google calendar link
    cy.get('.flex.mt-2.mb-4 > a').contains('Add to Google Calendar');

    cy.get('[data-test="event-type"] > label').contains('Event Type');

    cy.get('[data-test="event-type"] > a').should('not.be.empty');

    cy.get('.mr-2 > label').contains('Contacts');

    cy.get('.mr-2 > span').should('not.be.empty');

    cy.get('[data-test="organisation"] > label').contains('Organized by');

    cy.get('[data-test="organisation"] > a').should('not.be.empty');

    cy.get('article > h3').contains('Event Description');

    cy.get('article > p').should('not.be.empty');

  });

  it('featured events', function() {

    cy.chooseDate(8,'.id-2021-09-02');

    cy.get('.font-semibold > a').eq(1).click();

    //add this wait because of sync problems, the best practice is to wait for the request
    cy.wait(3000);

    //check if I am in the right place
    cy.get('#main-content > section > h1').contains('Featured Events');
  
    //It should found 3 events but it's not returning any
    cy.get('#main-content > section > div > h1 ').contains('There are no upcoming featured events');

  });



});