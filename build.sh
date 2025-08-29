npm install -g npm@latest
npm install pug-cli

tsc src/script.ts --outFile out/script.js
pug src/index.pug --out out
