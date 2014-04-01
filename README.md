# Hajime (始め) - NPM

My starter stack for new npm packages.   At the moment, I generally like the things in this stack. If you also like the things in this stack, you should use this and we should become friends. If you do not like the things in this stack, then you should probably not use this, but we could still be friends because I'm generally a likable person.

## Stack
- Gulp
- CoffeeScript
- Underscore
- Mocha
- JSDom
- Browserify

## Dev

Run `gulp` in the app directory.  It will watch for changes in src and automatically compile the coffeescript under `src` to `build`, concatenate everything, browserify it, and create a final `index.js` file in the root directory.

## Testing
Run `npm test` to run any tests under Mocha in the test directory.  Use `mocha.opts` to set any [Mocha flags](http://visionmedia.github.io/mocha/#usage) that are important to you.

## License

This code is dual licensed under the Beerware / Lunchware license.  See below for details:

    THE BEER-WARE / LUNCH-WARE LICENSE (Revision 42):
    <joe@joeellis.la> wrote this file. As long as you retain this notice you
    can do whatever you want with this stuff. If we meet some day, and you think
    this stuff is worth it, you can buy me a beer and/or lunch in return -- Joe Ellis
