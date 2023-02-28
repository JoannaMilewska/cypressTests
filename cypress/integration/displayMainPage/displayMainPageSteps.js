import { use } from "chai";
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import lumaHomePage from "../lumaHomePage";


Given ('the user is on the home page of Luma', ( )=>{
    cy.visit('/')
})

When ('the user loads the home page',()=>{

})

Then ('the header of the page should display the correct text',()=>{

})

And ('the site logo should be displayed',()=>{
    lumaHomePage.elements.logo().should('be.visible');
})

And ('the navigation menu should be displayed and include all necessary options',()=>{
    lumaHomePage.topbar.whatsNewButton().should('be.visible');
    lumaHomePage.topbar.womenButton().should('be.visible');
    lumaHomePage.topbar.menButton().should('be.visible');
    lumaHomePage.topbar.gearButton().should('be.visible');
    lumaHomePage.topbar.trainingButton().should('be.visible');
    lumaHomePage.topbar.saleButton().should('be.visible');
})

And ('all images on the page should be correctly displayed',()=>{
    lumaHomePage.photos.mainPhoto().should('be.visible');
    lumaHomePage.photos.promoPhoto().should('be.visible');
    lumaHomePage.photos.mixPhoto().should('be.visible');
    lumaHomePage.photos.erinPhoto().should('be.visible');
    lumaHomePage.photos.performancePhoto().should('be.visible');
    lumaHomePage.photos.ecofriendlyPhoto().should('be.visible');
})

And ('all links on the page should be active and redirect to the correct pages',()=>{

})

And ('page sections such as the footer should be correctly displayed',()=>{

})

And ('all forms such as a contact form should be functional',()=>{

})