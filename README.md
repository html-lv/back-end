Setup local postgres database:
1. You should have installed docker on your machine.

2. Run the following command to start the postgres database:
```docker pull postgres```
```docker run -d \```
  ```--name postgres-db \```
  ```-e POSTGRES_USER=postgres \```
  ```-e POSTGRES_PASSWORD=root \```
  ```-e POSTGRES_DB=enlab \```
  ```-p 5432:5432 \```
  ```postgres```


3. To connect to the database, you can use the following command:
```docker exec -it postgres-db psql -U postgres -d enlab```
or locally:
```psql -h localhost -U postgres -d enlab```
