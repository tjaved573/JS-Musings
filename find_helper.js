// use find helper for selecting specific entities from a collection, based on a condition

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

var admin = users.find(function (user) {
  return user.admin === true;
});

// returns FIRST value that matches condition. (difference
// between find() vs filter())

var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find(function (account) {
  return account.balance === 12;
});
