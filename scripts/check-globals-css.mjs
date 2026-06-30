import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cssPath = path.join(__dirname, '..', 'app', 'globals.css')
const text = fs.readFileSync(cssPath, 'utf8')
const open = (text.match(/\{/g) || []).length
const close = (text.match(/\}/g) || []).length

console.log(`Opening braces: ${open}`)
console.log(`Closing braces: ${close}`)
console.log(`Difference: ${open - close}`)

if (open !== close) {
  console.error('ERROR: app/globals.css brace count is unbalanced.')
  process.exit(1)
}

console.log('OK: app/globals.css braces are balanced.')
