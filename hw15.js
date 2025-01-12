const people = [
    { name: "Ola", country: "Ukraine", balance: 177,  friends: ['Tima', 'Oksana'], skills: ['Fishing', 'Cooking'] },
    { name: "Bob", country: "Germany", balance: 240,  friends: ['Snail'], skills: ['Fishing', 'Cycling']  },
    { name: "John", country: "Italy", balance: 679,  friends: ['Olha', 'Olena', 'Barys', 'Ihor'], skills: ['Photography', 'Dancing']   },
    { name: "Ivan", country: "Poland", balance: 43, friends: ['Mary', 'BoB', 'Tima'], skills: ['Carpentry', 'Fishing']  },
];

// task 1 Отримати загальну суму балансу (поле balance) всіх користувачів.
const countBalance = people.reduce((acc,person) => acc + person.balance, 0)
console.log(countBalance); 

// // task 2 Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.
// const copyPeople = [...people]; // копія масиву тому що сорт мутує 
// const findFriend = copyPeople.sort(())

// task 3 Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)
// використала копію масиву з попередньої таски
const sortfriends = copyPeople.sort((prevFriend,
    nextFriend) => prevFriend.friends.length - nextFriend.
    friends.length).map((person) => person.name)
console.log(sortfriends);

// task 4 Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.
let togetherSkills = [];
const findSkills = people.forEach((person) => togetherSkills.push(...person.skills)); // об'єднала усі скіли в один масив
// console.log(togetherSkills)
const uniqFindSkills = togetherSkills.reduce((uniq, skill) => {
  return uniq.includes(skill) ? uniq : [...uniq, skill]; // скоротила if else
}, [])
console.log(uniqFindSkills);

