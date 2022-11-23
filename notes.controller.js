const fs = require("fs/promises");
const path = require("path");
// const chalk = require("chalk"); -- This lib does not work with "require"

const notesPath = path.join(__dirname, "db.json");

async function addNote(title) {
  const notes = await getNotes();

  const note = {
    title,
    id: Date.now().toString(),
  };

  notes.push(note);

  await fs.writeFile(notesPath, JSON.stringify(notes));
  //   console.log(chalk.green.inverse("Note was added")); -- This lib does not work with "require"
}

async function deleteNote(id) {
  const notes = await getNotes();
  const newNotes = notes.filter((n) => n.id !== id);
  await fs.writeFile(notesPath, JSON.stringify(newNotes));
}

async function getNotes() {
  const notes = await fs.readFile(notesPath, { encoding: "utf-8" });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function printNotes() {
  const notes = await getNotes();
  console.log(
    `Here is the list of notes: ${notes
      .map((note, i) => i + 1 + ")" + note.id + " " + note.title)
      .join("; ")}`
  );
}

module.exports = {
  addNote,
  printNotes,
  deleteNote,
};
