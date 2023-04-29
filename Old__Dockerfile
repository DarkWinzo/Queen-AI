FROM quay.io/darkwinzo/queen-ai:beta
RUN git clone https://github.com/DarkWinzo/Queen-AI.git /root/Queen-AI/
WORKDIR /root/Queen-AI/
RUN yarn install --network-concurrency 1
CMD ["yarn", "start"]
