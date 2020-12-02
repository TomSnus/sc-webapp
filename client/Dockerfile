# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:latest
# Set the working directory to /client
WORKDIR /client/src/app
# copy package.json into the container at /client
COPY package*.json /client/src/app/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /client
COPY ./src /client/src/app/
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches
CMD ["npm", "start"]