const listItem = (string) => {
  return `<li class="list-group-item">${string}</li>`
}

const unorderedList = (items) => {
  if (items.length === 0) {
    return `<ul class='list-group'></ul>`;
  }
  const startingTag = `<ul class='list-group'>`;
  const endingTag = `</ul>`;
  const listTag = items.map((item) => {
    return `<li class='list-group-item'>${item}</li>`;
  });

  return startingTag + listTag.join("\n") + endingTag;
};



module.exports = { listItem, unorderedList };
