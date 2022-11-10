module.exports = {
  "source": ["tokens/**/*.json"],
  "format": {
    "styled-components": ({ dictionary }) => {
      return `export const styledComponentsColorTheme = {\n${
        dictionary.allTokens.reduce((acc, token) => {
          if (token.type === "color") 
            acc.push(`\t\t"${token.attributes.type}-${token.attributes.item}": "${token.value.toUpperCase()}"`);
          return acc;
        }, []).join(',\n')
      }\n} as const;`;
    },
    "stitches": ({ dictionary }) => {
      return `export const stitchesColorTheme = {\n${
        dictionary.allTokens.reduce((acc, token) => {
          if (token.type === "color") 
            acc.push(`\t\t${token.attributes.type}${token.attributes.item}: "${token.value.toUpperCase()}"`);
          return acc;
        }, []).join(',\n')
      }\n} as const;`;
    }
  },
  "platforms": {
    "js": {
      "transformGroup": "js",
      "files": [{
        "destination": "./src/styles/theme/themes.ts",
        "format": "stitches",
        "option": {
          "showFileHeader": false
        }
      }],
      "option": {
        "showFileHeader": true
      }
    }
  }
}
