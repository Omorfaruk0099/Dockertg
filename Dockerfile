# Use an official Node.js runtime as the base image
FROM node:latest

# Install dependencies
RUN npm install

# Run the command npm i child_process && node index.js when the container starts
CMD ["npm", "i", "child_process", "&&", "node", "index.js"]
