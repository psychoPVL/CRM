class TestItem {
    constructor(name, phone, email, product) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product;
    }
}

const testData = [
    new TestItem('Иван Иванов', parseInt('+79999999999'), 'ivanov@mail.ru', 'course-js'),
    new TestItem('Петр Петров', parseInt('+78888888888'), 'petrov@mail.ru', 'course-js'),
    new TestItem('Леша Алешин', parseInt('+77777777777'), 'ivanov@mail.ru', 'course-vue'),
    new TestItem('Гоша Гошин', parseInt('+76666666666'), 'goshin@mail.ru', 'course-wordpress'),
    new TestItem('Сеня Сенин', parseInt('+75555555555'), 'sinin@mail.ru', 'course-php'),
    new TestItem('Рома Романов', parseInt('+74444444444'), 'romanov@mail.ru', 'course-vue'),
    new TestItem('Гена Генин', parseInt('+73333333333'), 'genin@mail.ru', 'course-html'),
    new TestItem('Дима Димов', parseInt('+72222222222'), 'dimov@mail.ru', 'course-php'),
];

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

export default function getRandomData() {
    const index = getRandomIndex(testData.length);
    return testData[index];
}
