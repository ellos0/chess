{ pkgs ? import <nixpkgs> {} }:

let 
  nodePackages = pkgs.nodePackages;
in

pkgs.mkShell {
  buildInputs = [
    nodePackages.nodejs
    pkgs.yarn
    pkgs.typescript
  ];
}
