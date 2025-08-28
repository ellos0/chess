{ pkgs ? import <nixpkgs> {} }:

let 
  nodePackages = pkgs.nodePackages;
in

pkgs.mkShell {
  buildInputs = [
    nodePackages.nodejs
    nodePackages.pug-cli
    pkgs.yarn
    pkgs.typescript
  ];
}
