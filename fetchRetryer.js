// Необходимо создать функцию fetchRetryer, которая будет выполнять запрос на определенный api и
// повторять его до 5 раз, пока не получит ответ (статус 200). 
// Если после 5 повторов сервер не отвечает - возвращаем ошибку.

const fetchRetryer = (url, counter = 5) => {
    return fetch(url)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error("error");
            }
            return response;
        })
        .catch((error) => {
            if (counter > 0) {
                return fetchRetryer(url, counter - 1);
            }
            throw error;
        });
};

fetchRetryer("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => console.log("Success:", data))
    .catch((err) => console.error("Failed:", err.message));

fetchRetryer("https://invalid-url.example")
    .then((res) => res.json())
    .catch((err) => console.error("Failed after retries:", err.message));
