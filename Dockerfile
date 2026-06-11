FROM node:20-slim

RUN apt-get update && apt-get install -y \
    ffmpeg \
    wget \
    ca-certificates \
    fonts-noto \
    fonts-noto-color-emoji \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json ./
RUN npm install --production --legacy-peer-deps

COPY . .

RUN mkdir -p auth_info tmp

CMD ["node", "index.js"]
