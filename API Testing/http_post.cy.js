describe("Create New User", () => {
  it("Successfully create new user", () => {
    var user = {
      name: "Eduwork",
      job: "Education",
    };

    cy.request("POST", "https://reqres.in/api/users", user).then((response) => {
      expect(response.status).equal(201);

      // Assert that the "name" and "job" values in the response match what we expect
      expect(response.body.name).to.equal(user.name);
      expect(response.body.job).to.equal(user.job);
    });
  });
});
