## Crank/TypeScript/Snowpack
Livin' on the edge, Ma!

## Setup
`yarn install`

## Run Snowpack after installing anything
`npx snowpack`

(not sure why this way isn't picking up xstate...)
`npx snowpack --include "src/**/*.js"`

## Start dev server
`npx tsc -w`
and in another terminal:
`npx browser-sync . -w`

open `http://localhost:3000/` in browser
