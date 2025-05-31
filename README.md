# olmsted.io

Almost everything on this website is ordinary HTML and CSS. However, to make it easier to write long articles, everything in the `/writing` directory is generated from a markdown original.

You use `marked` to convert markdown files to HTML. To generate HTML from a markdown file, first ensure `marked` is installed:

```sh
bun i
```

Then, run this command:

```sh
bun run marked -i writing/int-and-wis.md -o writing/int-and-wis.html
```

Finally, paste the generated HTML within the template found at `template.html`.
