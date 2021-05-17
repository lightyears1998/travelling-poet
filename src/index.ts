import * as yaml from 'yaml'
import * as fs from 'fs'

const filename = process.argv[2]
const file = fs.readFileSync(filename, { encoding: 'utf8' })
const ly = yaml.parse(file)
console.log(ly)
