# ---- build ----
# Keep this major in sync with .nvmrc
FROM node:26-alpine AS build

WORKDIR /app

# The `prepare` script runs husky on every `npm ci`. There is no .git in the
# build context, so disable it rather than reaching for --ignore-scripts, which
# would also skip vue-demi's postinstall and break @vueuse/core.
ENV HUSKY=0

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- serve ----
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
