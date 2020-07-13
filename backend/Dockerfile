#Grab the latest alpine image
FROM alpine:latest

# print in python
ENV PYTHONUNBUFFERED=1

# Install python and pip
RUN apk add --no-cache --update python3 py3-pip bash
ADD ./requirements.txt /tmp/requirements.txt

RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add postgresql-dev \
    && pip install psycopg2 \
    && apk del build-deps


# Install dependencies
RUN pip3 install --no-cache-dir -q -r /tmp/requirements.txt

# Add our code
ADD ./ /opt/webapp/
WORKDIR /opt/webapp

# collect static files
RUN python3 manage.py collectstatic --noinput


# Expose is NOT supported by Heroku
# EXPOSE 5000 		

# Run the image as a non-root user
RUN adduser -D myuser
USER myuser

# Run the app.  CMD is required to run on Heroku
# $PORT is set by Heroku			
CMD gunicorn --bind 0.0.0.0:$PORT backend.wsgi --reload
# CMD gunicorn backend2.wsgi:application --bind 0.0.0.0:$PORT
