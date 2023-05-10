const logFunction = function (userInfo) {
  const { firstName, lastName, age, gender, userEmail, userPhoneNumber } = userInfo;

  console.log(firstName, lastName, age, gender, userEmail, userPhoneNumber);
};

// logFunction('Amelia', 'Burgess', 30, 'female', 'apjez@eh.aq', '(096) 35-21-476');

logFunction({
  gender: 'female',
  lastName: 'Burgess',
  age: 30,
  userEmail: 'apjez@eh.aq',
  userPhoneNumber: '(096) 35-21-476',
  firstName: 'Amelia',
});
