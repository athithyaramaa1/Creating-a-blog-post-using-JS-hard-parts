class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }
  addDescription() {
    let discription_card = document.createElement('p');
    discription_card.setAttribute('id', 'blog-description');
    discription_card.innerHTML = this.detail;
    document.getElementById('card-text').appendChild(discription_card);
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
function helperAddPost() {
  console.log('Open');
  document.getElementById('popupContact').style.display = 'block';
}

function helperPost() {
  console.log('Close');
  document.getElementById('popupContact').style.display = 'block';
  let Usertitle = document.getElementById('title').value;
  let UserDesc = document.getElementById('detail').value;

  let dataObj = new Blog(Usertitle, UserDesc);

  dataObj.addTitle();
  dataObj.addDescription();
}
