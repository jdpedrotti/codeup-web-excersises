const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeOrMore = users.filter(function (language)
{
    return language.languages.length > 2;
});
console.log(threeOrMore);


let userEmail = users.map (function (emails){
    return emails.email
})
console.log(userEmail)

let yearsXP = users.reduce((acc, experience) => {
    return acc + experience.yearsOfExperience
}, 0);
console.log(yearsXP);

let averageXP = yearsXP / users.length;
console.log(averageXP);

let longEmail = users.reduce((current, user) => {
    // if (current.length > user.email.length) {
    //     return current
    // } else {
    //     return user.email
    // }

    //below is shorthand of the above code
    return current.length > user.email.length ? current : user.email;
});
console.log(longEmail);

let userName = users.reduce((list, user) => {
    return list += (user.name + ', ')
}, "Your instructors are: ");
console.log(userName)

let userNames = users.reduce((acc, user, index, usersArray) => {
    return acc + `${acc ? ', ' : 'Your instructors are: '}${user.name}${ (index === (usersArray.length -1)) ? '.' : ''  }`
}, "");
console.log(userNames);


let diffLang = users.reduce ((acc, user) => {
    user.languages.forEach(function (language){
        if (!acc.includes(language)) {
            acc.push(language);
        }
    });
    return acc
}, []);
console.log(diffLang)


