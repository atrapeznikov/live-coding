// Напишите функцию для извлечения доменных имен из URL-адресов, используя регулярные выражения.

function extractDomain(url) {
    const regex = /https?:\/\/(www\.)?([^\/]+)/;
    const match = url.match(regex);
    return match ? match[2] : null;
}

// Тестовые данные
console.log(extractDomain("https://www.google.com")); // "google.com"
console.log(extractDomain("http://example.org")); // "example.org"
console.log(extractDomain("https://sub.domain.com/path")); // "sub.domain.com"
console.log(extractDomain("invalid-url")); // null