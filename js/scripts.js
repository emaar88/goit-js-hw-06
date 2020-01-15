"use strict";
import users from "./users.js";
//Задание 1
const getUserNames = users => {
  return users.map(el => el.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//Задание 2
const getUsersWithEyeColor = (users, color) => {
  return users.filter(obj => obj.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//Задание 3
const getUsersWithGender = (users, gender) => {
  return users.filter(el => el.gender === gender).map(el => el.name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//Задание 4
const getInactiveUsers = users => {
  return users.filter(obj => obj.isActive === false);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//Задание 5
const getUserWithEmail = (users, email) => {
  return users.filter(obj => obj.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

//Задание 6
const getUsersWithAge = (users, min, max) => {
  return users.filter(obj => obj.age > min && obj.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//Задание 7
const calculateTotalBalance = users => {
  return users.reduce((acc, el) => acc + el.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

//Задание 8
const getUsersWithFriend = (users, friendName) => {
  return users.filter(el => el.friends.includes(friendName)).map(el => el.name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

//Задание 9

const getNamesSortedByFriendsCount = users => {
  const newArr = [...users];
  return newArr
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(el => el.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Задание 10
const newArr = [...users];
const reduceSkills = newArr => newArr.reduce((accum, el) => {
  el.skills.filter(skill => {
    if (!accum.includes(skill))
    {
      accum.push(skill);
    }
  });
  return accum;
}, [])
 const getSortedUniqueSkills = newArr =>
 {
  return reduceSkills(newArr).sort();
 }


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
