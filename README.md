# json-markdown

This Project is fork of https://github.com/joxoo/jsonschema-md. With added features. Thank you [joxoo](https://github.com/joxoo).

[![Build Status](https://travis-ci.org/jeremyrajan/json-markdown.svg?branch=master)](https://travis-ci.org/jeremyrajan/json-markdown)

## About
json-markdown is a simple tool to generate documentation for your JSON schema. The lib provides a CLI api and pro-grammatical api for use in your applications.

## Usage

```
npm install --save [-g] json-markdown
```

### CLI
```
json-markdown <location-to-your-file.json> --w=true/false
```

You can pass -w=true/false, if you want to write to a file or not. By default its true.

This will generate the markdown from your schema and create `SCHEMA.md` in the current directory. You can also provide an output file, to which you want to write:

```
json-markdown <location-to-your-file.json> <output-file-location.md> --w=true/false
```

### API usage.
```javascript
const jsonmarkdown = require('json-markdown');
const schemaLoc = './product.json';
const outputFile = 'output-file.md'; // if you don't provide an output file, it will create an .md from your schema filename.
// the third argument defines, if you want to write to file or not. Set it to false, if you dont need to create a markdown yet.
jsonmarkdown.process(schemaLoc, outputFile, true, (err, result) => {
  console.log(result);
});

```

Report issues: https://github.com/jeremyrajan/jsonschema-md/issues

Hope it helps, someone :).
