FROM node:latest
ENV TZ=Asia/Kolkata
WORKDIR /root/Queen-AI/
COPY package*.json ./
RUN npm install
COPY . .
RUN apt -y update && apt -y upgrade && apt -y install ffmpeg git imagemagick graphicsmagick sudo yarn curl && cd /etc/apt/sources.list.d && sudo apt remove nodejs && sudo apt remove nodejs-doc && curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - &&apt-get install -y nodejs && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && apt -y update && apt -y install yarn && apt autoremove -y && rm -rf /var/lib/apt/lists/*
CMD ["npm", "start"]
