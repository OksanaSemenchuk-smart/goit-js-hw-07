const categoriesList = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesList.length}`);

for (const category of categoriesList) {
  const title = category.children[0].textContent;
  const elementsCount = category.children[1].children.length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
}
