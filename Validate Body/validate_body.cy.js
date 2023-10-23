describe("PokeAPI Tests", () => {
  it("should assert the JSON response body of a Pokemon", () => {
    // Make an HTTP GET request to the PokeAPI
    cy.request("https://pokeapi.co/api/v2/pokemon/25").then((response) => {
      // Assert on the status code of the response
      expect(response.status).to.equal(200);

      // Assert on the JSON response body
      expect(response.body).to.have.property("name", "pikachu");
      expect(response.body).to.have.property("id", 25);
      expect(response.body).to.have.property("height", 4);
      expect(response.body).to.have.property("weight", 60);

      // Assert on nested JSON value
      expect(response.body.abilities[0].ability.name).to.eq("static");
      expect(response.body.abilities[1].ability.name).to.eq("lightning-rod");
    });
  });
});
