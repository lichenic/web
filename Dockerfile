FROM denoland/deno:latest AS build
WORKDIR /app
COPY . .
RUN deno install
RUN deno task build

FROM denoland/deno:latest
WORKDIR /app
COPY --from=build /app .
EXPOSE 8000
CMD ["deno", "task", "start"]