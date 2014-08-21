BootyGulpy
==========

Kind of a starter with Less x Bootstrap x Gulp

Just a practical test for me to get a Gulp workflow.

The main concept here is to not include Bootstrap's compilation into the main watch task but create a new one.
In other words, you'll have two CSS' core: Bootstrap & your theme.

Because, as far as I know, you don't need to compile Bootstrap each time you refresh your browser. Eh.

## How to use

(assuming you've already installed npm, Gulp and all, right?)

#### Install all the gulp's modules

`$ npm install`

#### Watch modifications from bootstrap.less

`$ gulp watch-bootstrap-css`

#### Watch modifications from the whole /assets/less/theme/*.less folder.

`$ gulp watch-theme-css`

## (many)Thanks to:

- Putaindecode - Introduction à Gulp (http://putaindecode.fr/posts/js/introduction-gulp/)
- Julien Renaux - Introduction to Gulp.js with practical examples (http://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/)1