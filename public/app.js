document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;
    remove(id).then(() => event.target.closest("li").remove());
  } else if (event.target.dataset.type === "edit") {
    console.log(event.target.closest("li"));
  }
});

async function remove(id) {
  await fetch(`/${id}`, {
    method: "DELETE",
  });
}
