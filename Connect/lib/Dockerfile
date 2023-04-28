FROM quay.io/fenandes/amarok-md:beta
RUN git clone https://github.com/DarkWinzo/Queen-AI /root/Queen-AI/
WORKDIR /root/Queen-AI/
RUN yarn install --network-concurrency 1
CMD ["yarn", "start"]
