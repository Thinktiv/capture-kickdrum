# capture-kickdrum

### Installation
clone the repo and then in terminal:
```
npm install
npm run build
npm run dev
```
hosted on localhost: 4000

## Notes

### Viewport Widths
All viewport widths are done like this:
```
vw(px, 24)
```
It's the same as 24vw at 1280px

You can it write like this:
```
padding: vw(px, 24);
padding: vw(px, 24) vw(px, 24);
padding: vw(px, 24) vw(px, 24) vw(px, 24) vw(px, 24);
```
All of the above examples are valid.

This project isn't using breakpoints but if that changes in the future, you can set the breakpoints in the variablesandmixins.scss file

Padding at breakpoint 1 would be:
```
padding: vw(bp1, 24);
```
Padding at breakpoint 2:
```
padding: vw(bp2, 24)
```




### bundle.js
* Everything (styles, fonts, images) gets compiled into the bundle.js file which is located in dist/bundle.js. 
* Only the html and bundle.js needs to get updated when making changes.
* Remember to always run 'npm run build' before copying the bundle.js file. This make sure your changes are saved.
* Bundle.js is a huge file so its needs to be hosted somehwere. I used RawGit, but this may stop working if the repo becomes private.
* squarespace-ref.js shows the current code in squarespace with comments

### Issues
* Header breaks when resizing. You have to overide the squarespace styles.
* There is a flicker in the beginning right before the page loads. You can see the old template before it disappears.

