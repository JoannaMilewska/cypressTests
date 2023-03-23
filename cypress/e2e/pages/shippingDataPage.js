class shippingDataPage {
  elements = {
    firstNameTextbox: () => cy.get('[name="firstname"]'),
    lastNameTextbox: () => cy.get('[name="lastname"]'),
    streetAddressTextbox: () => cy.get('[name="street[0]"]'),
    cityTextbox: () => cy.get('[name="city"]'),
    regionDropdown: () => cy.get('[name="region_id"]'),
    postalCode: () => cy.get('[name="postcode"]'),
    countryDropdown: () => cy.get('[name="country_id"]'),
    phoneNumberTextbox: () => cy.get('[name="telephone"]'),
    radioButtonFreeDelivery: () => cy.get('[name="ko_unique_1"]'),
    radioButtonPaidDelivery: () => cy.get('[name="ko_unique_2"]'),
    nextPageButton: () => cy.get(".button.action"),
  };

  fillShippingForm() {
    this.elements.firstNameTextbox().clear().type("Jan");
    this.elements.lastNameTextbox().clear().type("Kowalski");
    this.elements.streetAddressTextbox().type("ul.Testowa 1");
    this.elements.cityTextbox().type("Miami");
    this.elements.regionDropdown().select("Florida");
    this.elements.postalCode().type("101100");
    this.elements.countryDropdown().select("United States");
    this.elements.phoneNumberTextbox().type("123456789");
  }
  choosingShippingMethod() {
    this.elements.radioButtonFreeDelivery().check();
  }
  goingToTheNextPage() {
    this.elements.nextPageButton().click();
  }
}

export default new shippingDataPage();
