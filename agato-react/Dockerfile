# ============================================================
# Agato Website - Local Development Container
# ============================================================
#
# This Dockerfile creates a Node.js environment for running
# the Agato React/Vite application locally.
#
# Application flow:
#
#   Docker container
#        ↓
#   Node.js
#        ↓
#   npm install
#        ↓
#   Vite development server
#        ↓
#   React application
#
# The application source will be mounted into the container
# by docker-compose.yml so local code changes are immediately
# available to Vite.
# ============================================================


# Use the lightweight Alpine version of Node.js.
FROM node:22-alpine


# Set the working directory inside the container.
#
# Commands executed below will run from:
#
#   /app
#
WORKDIR /app


# Copy dependency manifests first.
#
# Keeping this separate from the source code allows Docker to
# cache the dependency installation layer when package.json
# has not changed.
COPY package*.json ./


# Install project dependencies.
RUN npm install


# Copy the application source into the image.
#
# docker-compose will later mount the local source directory
# over /app during development.
COPY . .


# Vite will run on port 5173 inside the container.
EXPOSE 5173


# Start the Vite development server.
#
# --host 0.0.0.0 is important when running inside Docker.
# Without it, Vite may only listen on localhost inside the
# container and therefore be inaccessible from the host machine.
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]