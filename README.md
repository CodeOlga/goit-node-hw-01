https://monosnap.com/file/Ap70qprzepTsgOrn4pbdW2kLZS0vsR
https://monosnap.com/file/VIjCCX4ovBgD9FlZuCYfNiW4gIKnL7
https://monosnap.com/file/mY12JFxbat6Z9bE3cDASBOINdF0p59
https://monosnap.com/file/YQJhpQw1tdDkXYQM7PqmNMgImTZXCk

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/Ap70qprzepTsgOrn4pbdW2kLZS0vsR

# Получаем контакт по id - выводим в консоль объект контакта или null, если контакта с таким id не существует.

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
https://monosnap.com/file/VIjCCX4ovBgD9FlZuCYfNiW4gIKnL7

# Добавляем контакт и выводим в консоль созданный контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/mY12JFxbat6Z9bE3cDASBOINdF0p59

# Удаляем контакт и выводим в консоль удаленный контакт или null, если контакта с таким id не существует.

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
https://monosnap.com/file/YQJhpQw1tdDkXYQM7PqmNMgImTZXCk
