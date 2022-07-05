# Raijin

This is a super simple weather station webinterface build using [Sveltekit](https://kit.svelte.dev/), [Sqlite3](https://www.sqlite.org/index.html) and [Pancake](https://pancake-charts.surge.sh/). It uses no client-side Javascript and is a technical demonstration and not meant to be used anywhere


## Building

To create a production version of Raijin:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Docker build

```bash
docker build --no-cache -t sveltekit-docker:latest
docker run -it --rm --name sveltekit-docker -p 3000:3000 sveltekit-docker:latest
```