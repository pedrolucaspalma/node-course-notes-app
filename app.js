const yargs = require ('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note!'
})

console.log(yargs.argv)