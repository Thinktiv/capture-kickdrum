# capture-kickdrum

### Installation
clone the repo and then in terminal:
```
npm install
npm run build
npm run dev
```
hosted on localhost: 4000

### Notes
* squarespace-ref.js shows the current code in squarespace with comments

#### bundles.js
* Everything (styles, fonts, images) gets compiled into the bundle.js file which is located in dist/bundle.js. 
* Only the html and bundle.js needs to get updated when making changes.
* Remember to always run 'npm run build' before copying the bundle.js file. This make sure your changes are saved.
* Bundle.js is a huge file so its needs to be hosted somehwere. I used RawGit, but this may stop working if this repo becomes private.

### Issues
* Header breaks when resizing. You have to overide the squarespace styles.
* There is a flicker in the beginning right before the page loads. You can see the old template before it disappears.
