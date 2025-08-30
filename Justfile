start:
  nix-shell --run "just build"

build:
  mkdir out
  npm install -g npm@latest
  npm install core-js@latest
  npm install pug-cli -g

  tsc --module es2015 --target es2015 src/script.ts
  mv src/script.js out/script.js
  pug src/index.pug
  mv src/index.html out/index.html
  mv src/style.css out/style.css

clean:
  rm -r out
