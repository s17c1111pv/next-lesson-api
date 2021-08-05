# backend/nextjs_restapi/Dockerfile
# set base image
FROM python:3.8.7

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# set work directory
WORKDIR /code

# install dependencies
COPY ./nextjs_restapi/requirements.txt ./
COPY ./nextjs_restapi/requirements-dev.txt ./
RUN python3 -m pip install --upgrade pip setuptools
RUN pip install -r requirements.txt

# Copy project
COPY ./nextjs_restapi/ ./

# Expose application port
EXPOSE 8000