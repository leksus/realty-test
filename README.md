# Apartments

Приложение Apartments

## Запуск приложения

Разворачивание и запуск приложения производится с помощью docker-compose

**Команды для сборки и запуска приложения в разных режимах компиляции:**


Для запуска с помощью сервера angular-cli, для режимов jit и aot соответственно
```
docker-compose up run-jit

docker-compose up run-aot
```
Далее нужно открыть в браузере http://localhost:4200 

---

Для сборки проекта в production и запуска с помощью сервера nginx
```
docker-compose up run-nginx
```
Далее нужно открыть в браузере http://localhost:801 

Для остановки приложения можно нажать ctrl+c либо выполнить команду
```
docker-compose stop

```

