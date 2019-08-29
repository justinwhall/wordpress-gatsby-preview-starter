<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
 WordPress + Gatsby + Preview Starter
</h1>

The repository contains a WordPress Docker container plus a Gatsby _theme_ that supports live previews and a starter site.

## 🚀 Quick start

1. **RECURSIVELY Clone this repo. `git clone --recursive ...`**

2. **Rename `theme/sample.env` > `.env` & enter creds. Hint: current creds will work.**

3. **In the root of the repo run `yarn`**

4. From the `theme` directory, run **`docker-compose up`**

5. **Run through WordPress install @ http://localhost:3030**

6. **Activate WPGraphQL plugin**

7. **Activate WP Headless theme**

8. **Enable Permalinks**

9. **Fire up the Gatsby Starter Site: In the root of the project run `yarn workspace site develop`**

10. **Navigate to the "Hello World" post, change something & click the preview button**

## Custom Post Type Previews?

Yes! The included WordPress theme registers a _beer_ custom post type. Simply add a beer post and click the preview button.

## Known limitations:

1. Both the WordPress Docker container need to run on the same domain. Locally this is, of course, `localhost:anyport`. In production, this could also be `https://mydomain.com` + `https://data.mydomain.com`.

2. Gutenberg is disabled. There are some outstanding bugs in regards to filtering `preview_post_link` noted [here](https://github.com/WordPress/gutenberg/issues/13998).

3. Gatsby must run on port `:8000`. `Access-Control-Allow-Origin` header is hard-coded in to `8000` in `headers.php`
