const defaultData = [
  {
    role: 'KID',
    name: 'timmy',
    userName: 'timmy',
    password: 'welcome',
    inHandBalance: 14.00,
    savingsTargets: [],
  },
];

export function setInitLocalStoreData() {
  // small trick to not overwrite on init when something already is there
  if (window.localStorage.getItem('users')) {
    return;
  }
  window.localStorage.setItem('users', JSON.stringify(defaultData));
}

export function loginUser(userName, password) {
  const users = JSON.parse(window.localStorage.getItem('users'));
  const userExist = users.filter((element) => {
    let awnser = false;
    if (element.userName === userName && element.password === password) {
      awnser = true;
    }
    return awnser;
  });
  return userExist.length === 1;
}

export function getUser(userName) {
  const users = JSON.parse(window.localStorage.getItem('users'));
  return users.filter((element) => element.userName === userName)[0];
}

export function addSavingsGoal(user, newGoal) {
  /*
    Expecting something like this and the user name
      {
        name: "lego starwars ship", /
        goalAmount: 500.00,
        currentBalance: 0.00,
        recurringSavingsAmount: 5.00,
        recurringFrequency: 'WEEKLY',
        sponsors: [
          {
          sponsorAmount: 5.00,
          sponsoredRelative: "PARENTS",
          recurringFrequency: "ONCE",
          todoChore: true
        }
      ]
    }
  */
  // in theory this should work :D
  const users = JSON.parse(window.localStorage.getItem('users'));
  users[users.findIndex((element) => user === element.userName)].savingsTargets.push(newGoal);
}

export default {
  setInitLocalStoreData,
};
