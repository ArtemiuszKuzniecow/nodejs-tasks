const yargs = require("yargs");
const {
  addNote,
  getNotes,
  deleteNote,
  editNote,
} = require("./new_task.controller");

yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: {
      type: "string",
      describe: "Note title",
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
  },
});
yargs.command({
  command: "remove",
  describe: "Remove note by id",
  builder: {
    id: {
      type: "string",
      describe: "Note id",
      demandOption: true,
    },
  },
  handler({ id }) {
    deleteNote(id);
  },
});

yargs.command({
  command: "edit",
  describe: "Edit note by id",
  builder: {
    id: {
      type: "string",
      describe: "Note id",
      demandOption: true,
    },
    title: {
      type: "string",
      describe: "Note title",
      demandOption: true,
    },
  },
  handler({ id, title }) {
    editNote(id, title);
  },
});

yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    const notes = await getNotes();
    console.log(notes);
  },
});

yargs.parse();
