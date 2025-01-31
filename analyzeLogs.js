// Напишите функцию, которая принимает массив строк (логи) и возвращает список пользователей, 
// которые больше всего взаимодействовали с системой.

function analyzeLogs(logs) {
    const userActions = {};

    for (const log of logs) {
        const [user, action] = log.split(" ");
        if (!userActions[user]) {
            userActions[user] = 0;
        }
        userActions[user] += 1;
    }

    return userActions;
}

const logs = [
    "user1 login",
    "user2 login",
    "user1 click",
    "user3 login",
    "user1 logout",
    "user2 click",
    "user2 logout",
    "user3 click",
    "user3 logout",
];

console.log(analyzeLogs(logs));
// { user1: 3, user2: 3, user3: 3 }
