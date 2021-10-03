const yargs = require ('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    handler: function(){
        console.log('Adding a new note!')
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

console.log(yargs.argv)