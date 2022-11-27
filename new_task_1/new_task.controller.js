const fs = require("fs/promises");
const chalk = require("chalk");

async function addNote(title) {
  const notes = await getNotes();
  const note = {
    title,
    id: Date.now().toString(),
  };

  notes.push(note);

  await fs.writeFile("../db.json", JSON.stringify(notes));
  console.log(chalk.bgGreenBright("Note was added!"));
}

async function getNotes() {
  const notes = await fs.readFile("../db.json", { encoding: "utf-8" });
  console.log(chalk.bgGreenBright("NOTES:"));
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function deleteNote(id) {
  const notes = await getNotes();
  const newNotes = notes.filter((n) => n.id !== id);

  await fs.writeFile("../db.json", JSON.stringify(newNotes));
  console.log(chalk.bgRedBright(`Note with id:${id} has been deleted!`));
}

async function editNote(id, title) {
  const notes = await getNotes();
  const newNotes = notes.map((n) => {
    if (n.id === id) {
      return { title: title, id: id };
    } else {
      return n;
    }
  });

  await fs.writeFile("../db.json", JSON.stringify(newNotes));
  console.log(chalk.bgBlueBright(`Note with id: ${id} has been edited`));
}

module.exports = {
  addNote,
  getNotes,
  deleteNote,
  editNote,
};
