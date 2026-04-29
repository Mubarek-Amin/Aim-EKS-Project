
FROM python:3.11-slim-bookworm AS builder

WORKDIR /install
#Install build dependencies and Aim package in the builder stage.
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    make \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip

RUN pip install --prefix=/install/deps aim==3.29.1
#Multistage build to reduce the final image size

FROM python:3.11-slim-bookworm 
#Copy only the necessary dependencies from the builder stage to the final image.
COPY --from=builder /install/deps /usr/local


RUN mkdir -p /aim

EXPOSE 43800
#Initialises Aim repository and starts the Aim server on the specified host and port with 2 workers, using the repository located at /aim.
CMD [ "sh", "-c", "echo 'N'| aim init --repo /aim && aim up --host 0.0.0.0 --port 43800 --workers 2 --repo /aim" ]
