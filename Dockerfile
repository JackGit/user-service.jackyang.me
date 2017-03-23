FROM hub.c.163.com/library/node:latest

# Create app directory
RUN mkdir -p /home/app
WORKDIR /home/app

# Bundle app source
COPY . /home/app
RUN npm install --production

ENV HTTP_PORT=8080
ENV NODE_ENV=production

ENV LOG_LEVEL=ALL
ENV LOG_FILE_DIRETORY=/var/log/jackyang.me/user-service

ENV APP_ID=oKIqR7RKOUmhfwinWOOrxkFW-gzGzoHsz
ENV APP_KEY=onqfBUfgUBqn9dJGl7GmPfGO

EXPOSE 8080
CMD ["npm", "start"]
