# Django backend - Node js frontend starter



## Local development

- run:
  - `docker-compose build`
  - `docker-compose up`
- backend actions
  - `docker-compose run backend`: Run any action inside the container backend container
  - `docker-compose run backend python3 manage.py makemigrations`: Create migrations based on changes to models
  - `docker-compose run backend python3 manage.py migrate`: migrate models
  - `docker-compose run backend python3 manage.py createsuperuser --email admin@example.com --username admin`: Create super user


## Deploy to heroku and vercel

### Django Backend
From django project directory
- Push:
  - `heroku container:login`: Log for the container registry
  - `heroku create`: Create proyect
  - `heroku container:push web -a <project-name>`: Push and build image. web is the <process-type>, not the service name
  - `heroku container:release web -a <project-name>`
- Actions
  - `heroku run`: Run any action inside the container in heroku
  - `heroku run python3 manage.py makemigrations -a <project-name>`: Create migrations based on changes to models
  - `heroku run python3 manage.py migrate -a <project-name>`: migrate models
  - `heroku run python3 manage.py createsuperuser --email admin@example.com --username admin  -a <project-name>`: Create super user

### Frontend (Any framework)
From frontend directory

- Push
  - Set environment variables from `.env.prod`
  - Push to favorite service
