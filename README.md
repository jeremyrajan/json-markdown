# json-markdown

This Project is fork of https://github.com/joxoo/jsonschema-md. With added features. Thank you [joxoo](https://github.com/joxoo).

## About
json-markdown is a simple tool to generate documentation for your JSON schema. The lib provides a CLI api and pro-grammatical api for use in your applications.

## Usage

```
npm install --save [-g] json-markdown
```

### CLI
```
json-markdown <location-to-your-file.json>
```

This will generate the markdown from your schema and create `SCHEMA.md` in the current directory. You can also provide an output file, to which you want to write:

```
json-markdown <location-to-your-file.json> <output-file-location.md>
```

### API usage.
```javascript
const jsonmarkdown = require('json-markdown');
const schemaLoc = 'location-to-your-schema-file';
const outputFile = 'output-file.md'; // if you dont provide an output file, it will create an .md from your schema filename.
jsonmarkdown(schemaLoc, outputFile); // This will create a markdown file, and report errors if needed.
```

Report issues: https://github.com/jeremyrajan/jsonschema-md/issues

Hope it helps, someone :).
