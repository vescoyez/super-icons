# Super Icons

## Installing

**1. Run Install with bower**

```
$ bower install super-icons
```

**2. Add the stylesheet**

```html
<link href="/bower_components/super-icons/css/super-icons.css" rel="stylesheet">
```

**3. Add the polyfill for IE/Edge**

```html
<script src="/bower_components/svg4everybody/dist/svg4everybody.min.js"></script>
```

run svg4everybody

```html
<script>svg4everybody();</script>
```

**4. Add your icon**

```html
<svg viewBox="0 0 24 24" class="si">
  <use xlink:href="/bower_components/super-icons/md-icons/icons.svg#3d-rotation"></use>
</svg>
```

## Icons

Check the [Material Design icons](https://elements.polymer-project.org/elements/iron-icons?view=demo:demo/index.html&active=iron-icons) available
