# Apartments

Приложение Apartments

## Запуск приложения

Разворачивание и запуск приложения производится с помощью docker-compose

**Команды для сборки и запуска приложения в разных режимах компиляции:**


Для запуска в режиме jit с помощью сервера angular-cli
```
docker-compose up run-jit

```

Для запуска в режиме aot с помощью сервера angular-cli
```
docker-compose up run-aot

```

Для сборки проекта в production и запуска с помощью сервера nginx
```
docker-compose up run-nginx


```

Для остановки приложения можно нажать ctrl+c либо выполнить команду
```
docker-compose stop

```

Далее нужно открыть в браузере http://localhost:4200 