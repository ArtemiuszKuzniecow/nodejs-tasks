document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;
    remove(id).then(() => event.target.closest("li").remove());
  } else if (event.target.dataset.type === "edit") {
    const id = event.target.dataset.id;
    const title = e.target.closest("div").previousElementSibling.value;
    const value = prompt("Edit", text);
    edit(id, value).then(() => {
      title = value;
    });
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: payload }),
  });
}
