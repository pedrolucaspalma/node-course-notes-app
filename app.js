const { argv } = require('yargs')
const yargs = require ('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: function(){
        console.log('Removing the note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: function(){
        console.log('Listing all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read note',
    handler: function(){
        console.log('Reading the note')
    }
})

yargs.parse()

// console.log(yargs.argv)