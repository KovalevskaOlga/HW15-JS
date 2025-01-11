const people = [
    { name: "Ola", country: "Ukraine", balance: 177,  friends: ['Tima', 'Oksana'], skills: ['Painting', 'Cooking'] },
    { name: "Bob", country: "Germany", balance: 240,  friends: ['Snail'], skills: ['Guitar', 'Cycling']  },
    { name: "John", country: "Italy", balance: 679,  friends: ['Olha', 'Olena', 'Barys', 'Ihor'], skills: ['Photography', 'Dancing']   },
    { name: "Ivan", country: "Poland", balance: 43, friends: ['Mary', 'BoB', 'Tima'], skills: ['Carpentry', 'Fishing']  },
];

// task 1 Отримати загальну суму балансу (поле balance) всіх користувачів.
const countBalance = people =>
    people.reduce((totalBalance, person) => totalBalance + person.balance, 0);
console.log(countBalance(people)); 

// task 2 Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.
const findTima = people.filter((person) => person.
    friends.includes('Tima')).map((person) => person.name); 
console.log(findTima)

// task 3 Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)
const copyPeople = [...people]; // копія масиву, тому що сорт мутує масив
const sortfriends = copyPeople.sort((prevFriend,
    nextFriend) => prevFriend.friends.length - nextFriend.
    friends.length).map((person) => person.name)
console.log(sortfriends);

// task 4 Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.
let togetherSkills = [];
const findSkills = people.forEach((person) => togetherSkills.
    push(...person.skills));

    let uniqueSkills = [];
togetherSkills.forEach((skill) => {
  if (!uniqueSkills.includes(skill)) {
    uniqueSkills.push(skill);
  }
});

uniqueSkills.sort();
console.log(uniqueSkills)