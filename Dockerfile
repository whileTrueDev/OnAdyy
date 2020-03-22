FROM node:10.15.3-alpine
ENV NODE_ENV production
RUN mkdir -p /home/twitchChat
WORKDIR /home/twitchChat
ADD ./dist /home/twitchChat
RUN yarn
CMD yarn start:production