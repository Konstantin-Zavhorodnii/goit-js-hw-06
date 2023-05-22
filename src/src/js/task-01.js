const catogoriesNodes = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, catogoriesNodes.length);

catogoriesNodes.forEach((node) => { 
    console.log(`Category: `, node.querySelector(`h2`).innerHTML);
    console.log(`Elements: `,node.querySelectorAll(`li`).length)
});

