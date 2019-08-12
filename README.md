<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
 WordPress + Gatsby + Preview Starter
</h1>

The repository contains a WordPress docker container plus a Gatsby starter that supports live previews.

## 🚀 Quick start

1. **Clone this repo.**

2. **Rename `theme/sample.env` > `.env` & enter creds. Hint: current creds will work.**

4. **In the root of the repo run `yarn`**

5. **`docker-compose up`**

6. **Run through WordPress install @ http://localhost:3000**

7. **Activate WPGraphQL**

8. **Activate WP Headless theme**

9. **Enable Permalinks**

10. **Fire up the Gatsby Demo Site: In the root of the project run `yarn workspace demo develop`**

11. **Navigate to the "Hello World" post, change something & click the preview button**


## Known limitations:

1. Both the WordPress Docker container need to run on the same domain. Locally this is, of course, `localhost:anyport`. In production, this could also be `https://mydomain.com` + `https://data.mydomain.com`.

2. Gutenberg is disabled. There are some outstanding bugs in regards to filtering `preview_post_link` noted [here](https://github.com/WordPress/gutenberg/issues/13998).

3. Gatsby must run on port `:8000`. `Access-Control-Allow-Origin` header is hard-coded in to `8000` in `headers.php`