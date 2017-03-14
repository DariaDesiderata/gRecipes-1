
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user").del()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        { email: 'julia@child.com', username: 'Julia Child' },
        { email: 'alton@brown.com', username: 'Alton Brown'},
        { email: 'ina@garten.com', username: 'Ina Garten'},
        { email: 'joe@aol.com', username: 'Joe'},
        { email: 'suzie@yahoo.com', username: 'Suzie'}
      ]);
    });
};
