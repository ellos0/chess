start:
  nix-shell --run "just build"

build:
  mkdir out
  npm install -g npm@latest
  npm install core-js@latest
  npm install pug-cli -g

  cp client/index.js out/index.js
  pug client/index.pug
  mv client/index.html out/index.html
  cp client/style.css out/style.css

clean:
  rm -r out
