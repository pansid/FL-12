const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

let ul1 = document.createElement('ul');

let liFirst = document.createElement('li');
liFirst.innerHTML = '<i class="material-icons">folder</i>';
let p1 = document.createElement('p');
p1.className = 'p-folder';
p1.innerHTML = structure[0].title;

let liSecond = document.createElement('li');
liSecond.innerHTML = '<i class="material-icons">folder</i>';
let p2 = document.createElement('p');
p2.className = 'p-folder';
p2.innerHTML = structure[1].title;

liFirst.append(p1);
liSecond.append(p2);

let ul1_1 = document.createElement('ul');
ul1_1.className = 'ul-folder';                                  
let li1_1 = document.createElement('li');
li1_1.innerHTML = '<li class="material-icons">insert_drive_file</li>';
let p1_1 = document.createElement('p');
p1_1.className = 'p-file';
p1_1.innerHTML = structure[0].children[0].title;

li1_1.append(p1_1);
ul1_1.append(li1_1);
liFirst.append(ul1_1);

let li1_2 = document.createElement('li');
li1_2.innerHTML = '<i class="material-icons">folder</i>';
let p1_2 = document.createElement('p');
p1_2.className = 'p-folder';
p1_2.innerHTML = structure[0].children[1].title;

li1_2.append(p1_2);
ul1_1.append(li1_2);

let ul1_2_1 = document.createElement('ul');
ul1_2_1.className = 'ul-folder';                                    
let li1_2_1 = document.createElement('li');
li1_2_1.innerHTML = '<li class="material-icons">insert_drive_file</li>';
let p1_2_1 = document.createElement('p');
p1_2_1.className = 'p-file';
p1_2_1.innerHTML = structure[0].children[1].children[0].title;

li1_2_1.append(p1_2_1);
ul1_2_1.append(li1_2_1);
li1_2.append(ul1_2_1);

let li1_2_2 = document.createElement('li');
li1_2_2.innerHTML = '<i class="material-icons">folder</i>';
let p1_2_2 = document.createElement('p');
p1_2_2.className = 'p-folder';
p1_2_2.innerHTML = structure[0].children[1].children[1].title;

li1_2_2.append(p1_2_2);
ul1_2_1.append(li1_2_2);

let ul1_2_2_1 = document.createElement('ul');
ul1_2_2_1.className = 'ul-folder';
let li1_2_2_1 = document.createElement('li');
li1_2_2_1.innerHTML = '<i>Folder is empty</i>';

ul1_2_2_1.append(li1_2_2_1);
li1_2_2.append(ul1_2_2_1);

let ul2_1 = document.createElement('ul');
ul2_1.className = 'ul-folder';
let li2_1 = document.createElement('li');
li2_1.innerHTML = '<i class="material-icons">folder</i>';
let p2_1 = document.createElement('p');
p2_1.className = 'p-folder';
p2_1.innerHTML = structure[1].children[0].title;

li2_1.append(p2_1);
ul2_1.append(li2_1);
liSecond.append(ul2_1);

let ul2_1_1 = document.createElement('ul');
ul2_1_1.className = 'ul-folder';
let li2_1_1 = document.createElement('li');
li2_1_1.innerHTML = '<i>Folder is empty</i>';

ul2_1_1.append(li2_1_1);
li2_1.append(ul2_1_1);

ul1.append(liFirst);
ul1.append(liSecond);

rootNode.append(ul1);

let mainUl = rootNode.parentNode.querySelectorAll('ul.ul-folder');

mainUl.forEach( function(element) {
  if (element) {
    element.hidden = !element.hidden;
  }
});

rootNode.onclick = function (event) {
  if (event.target.className !== 'p-folder') {
    return;
  }

  let childrenExist = event.target.parentNode.querySelector('ul');
  if (!childrenExist) {
    return;
  }

  let fld = event.target.parentNode.querySelector('i.material-icons');
  if (fld.outerHTML === '<i class="material-icons">folder</i>') {
    fld.outerHTML = '<i class="material-icons">folder_open</i>'  
  } else {
    fld.outerHTML = '<i class="material-icons">folder</i>';
  }
  
  childrenExist.hidden = !childrenExist.hidden;
}

