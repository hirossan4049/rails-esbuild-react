const { build } = require('esbuild')
const glob = require('glob')
const fs = require('node:fs')

const entryPoints = glob.sync('./app/javascript/**/*.{js,jsx,ts,tsx,svg}').filter(e => !e.includes("app/javascript/application.jsx"))
// const public = glob.sync('./public/**/*.{png,svg,jpg}')
console.dir(entryPoints)

let exampleOnLoadPlugin = {
  name: 'example',
  setup(build) {
    build.onLoad({ filter: /\.jsx$/ }, async (args) => {
      // console.log({text})
      let text = 'import {lazy} from "react"; let imports = {}\n'
      entryPoints.forEach(ep => {
        const file = ep.replace("app/javascript/", "")
        text += `imports["${file.replace(".tsx", "")}"] = lazy(() => import("./${file}"))\n`
      })
      text += await fs.promises.readFile(args.path, 'utf8')
      return {
        contents: text,
        loader: 'jsx',
      }
    })
  },
}

build({
  entryPoints: ['./app/javascript/application.jsx'],
  // inject: entryPoints.concat(public),
  inject: ['inject.js'],
  bundle: true,
  outdir: 'app/assets/builds',
  publicPath: '/assets',
  format: 'esm',
  // watch,
  logLevel: 'error',
  loader: {
    ".svg": "text",
    ".png": "file",
    ".jpg": "file",
  },
  // minify: true,
  sourcemap: true,
  platform: 'browser',
  plugins: [exampleOnLoadPlugin],
})