document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;
    remove(id).then(() => event.target.closest("li").remove());
  } else if (event.target.dataset.type === "edit") {
    const id = event.target.dataset.id;

    const text =
      event.target.parentNode.parentNode.childNodes[0].textContent.trim();
    const value = prompt("Edit", text);
    console.log(id, value);
  }
});

async function remove(id) {
  await fetch(`/${id}`, {
    method: "DELETE",
  });
}

async function edit(id, payload) {
  const data = await fetch(`/${id}`, {
    method: "PUT",
    body: payload,
  });
}
