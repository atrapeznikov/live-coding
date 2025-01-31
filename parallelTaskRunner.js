// Реализуйте функцию, которая запускает задачи с ограничением на количество параллельно выполняемых задач.

function parallelTaskRunner(tasks, maxParallel) {
    const results = [];
    let running = 0;
    let currentTask = 0;

    return new Promise((resolve) => {
        function runNext() {
            if (currentTask === tasks.length && running === 0) {
                resolve(results); // Все задачи завершены
                return;
            }

            if (running < maxParallel && currentTask < tasks.length) {
                const taskIndex = currentTask++;
                running++;

                tasks[taskIndex]()
                    .then((result) => {
                        results[taskIndex] = result;
                    })
                    .finally(() => {
                        running--;
                        runNext();
                    });

                runNext(); // Запуск следующей задачи, если это возможно
            }
        }

        runNext();
    });
}

// Пример использования:
const tasks = [
    () => new Promise((res) => setTimeout(() => res("Task 1"), 1000)),
    () => new Promise((res) => setTimeout(() => res("Task 2"), 500)),
    () => new Promise((res) => setTimeout(() => res("Task 3"), 1200)),
    () => new Promise((res) => setTimeout(() => res("Task 4"), 300)),
];

parallelTaskRunner(tasks, 2).then(console.log);
// ["Task 1", "Task 2", "Task 3", "Task 4"]