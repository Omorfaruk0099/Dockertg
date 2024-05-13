# Use an official Node.js runtime as the base image
FROM node:latest

# Copy the index.js and keep.js files into the container
COPY index.js .
COPY keep.js .

# Run the commands to start the apps
CMD ["sh", "-c", "node index.js && node keep.js"]
