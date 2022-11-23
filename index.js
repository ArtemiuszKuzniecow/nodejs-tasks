const yargs = require("yargs");
const { addNote, printNotes, deleteNote } = require("./notes.controller");

yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: {
      type: "string",
      describe: "Node title",
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    printNotes();
  },
});

yargs.command({
  command: "remove",
  describe: "Remove note by ID",
  builder: {
    id: {
      type: "string",
      describe: "Node id",
      demandOption: true,
    },
  },
  async handler({ id }) {
    await deleteNote(id);
  },
});

yargs.parse();
