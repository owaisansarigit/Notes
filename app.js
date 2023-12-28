const main = document.querySelector(".main");
const btn = document.querySelector(".btn");
const dbtn = document.querySelector(".deletebtn");
const ta = document.querySelector(".ta");
btn.addEventListener("click", () => {
  addNote();
  console.log("Note Added !");
});
const addNote = (text = "") => {
  let note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `<div class="tool">
    <i class="fa-regular fa-floppy-disk save"></i>
    <i class="fa-solid fa-trash delete"></i>
  </div>
  <textarea class="ta" autofocus>${text}</textarea>
</div>`;
  main.append(note);
  dbtn.addEventListener("click", () => {
    note.remove();
    saveNotes();
    console.log("All Notes Removed !");
  });
  note.querySelector(".delete").addEventListener("click", () => {
    note.remove();
    saveNotes();
    console.log("Note Removed !");
  });
  note.querySelector(".save").addEventListener("click", () => {
    saveNotes();
    console.log("Note Saved !");
  });
};
const saveNotes = () => {
  const notes = document.querySelectorAll(".ta ");
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(data));
};
(function () {
  const lsnotes = JSON.parse(localStorage.getItem("notes"));
  lsnotes.forEach((lsnotes) => {
    addNote(lsnotes);
  });
})();