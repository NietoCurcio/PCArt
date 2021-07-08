# PCArt

> A company Website that builds PC's and Setups.

<p align="center">

<img src="https://github.com/NietoCurcio/pcart/blob/main/.github/showcase.png?raw=true" width="750" alt="PCArt">

</p>

## Bootstrap & Sass

This project uses [Sass (CSS preprocessor)](https://sass-lang.com/) to perform customizations on [Bootstrap](https://getbootstrap.com/docs/5.0/customize/sass/), it's very suited when you need to create or change variables beyond the built-in like `bg-primary` for example. Not only that, but it allows the use of Mixins, one example of Mixin customization is the hover effect on the button element in the form.

## Responsiveness

Bootstrap is straightforward on building responsive websites, since it uses mobile-first approach and makes available various classes based on breakpoints (width of the viewport).

<img src="https://github.com/NietoCurcio/pcart/blob/main/.github/responsiveness.png?raw=true" width="280" alt="PCArt">

## Webpack

<img src="https://camo.githubusercontent.com/b0573f87b0786eda63c76f2a9a1358e7a653783c25c03c6c908a00b70c713d78/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667" alt="Webpack" width="100">

In this project I had the experience of making a bundle of my project through [Webpack](https://webpack.js.org/). It allows us to bundle our JavaScript through one entry point or more, therefore, it can package our project doing a series of optimizations for production.

The building of the project is done using [Webpack plugins](https://webpack.js.org/plugins/) and [Webpack Loaders](https://webpack.js.org/loaders/). The first it's necessary to enhance the functionally of webpack, then I've made use of plugins for minification of files and assets; the second, it's because Webpack naturally understands JavaScript files, in order to understand other types of static resources we must use loaders to load non-JavaScript files in our bundle.

Plugins and loaders used in this project:

- [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)

- [CssMinimizerPlugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/)

- [TerserPlugin](https://webpack.js.org/plugins/terser-webpack-plugin/)

- [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)

Webpack generates the `build` folder. It's configured through the `webpack.config.js` file and the `npm run build` script executes the bundling task.

This script and the build generated is used by [Netlify](https://www.netlify.com/) to deploy the Website.

- https://pcart-curcio.netlify.app/

## Full stack Web development with React

This project was my conclusion of Front-End Web UI Frameworks and Tools: Bootstrap 4 course that makes part of the Full stack Web development with React on Coursera. The other projects that I've built during this course is shown here:

"A server-side project built with Nestjs that join people that wants to sell with people that wants to buy products". Integrated with [Pagarme API](https://docs.pagar.me/) in order to make a transaction through payment slip.

- [SellerFinder REST API NestJs](https://github.com/NietoCurcio/SellerFinder-REST-API)

"An App to join buyers to sellers". React application.

- [SellerFinder React](https://github.com/NietoCurcio/SellerFinder)

## Social

- [Linkedln](https://www.linkedin.com/in/felipe-antonio-nieto-curcio-9b865116a/)
