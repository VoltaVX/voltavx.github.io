FROM node:22-bookworm-slim

ENV NODE_ENV=development

WORKDIR /workspace

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        ca-certificates \
    && rm -rf /var/lib/apt/lists/*

USER node

EXPOSE 4322