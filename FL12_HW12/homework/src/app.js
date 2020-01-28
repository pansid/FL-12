let main_page = document.getElementById('main_page');
let page_add = document.getElementById('/add');
let page_modify = document.getElementById('/modify/:item')

let btnAddnew = document.getElementById('add_set');
let btnCancel = document.getElementsByName('cancel');
let btnAddTerms = document.getElementsByName('add_terms');
let btnSave = document.getElementsByName('save');
let btnRemove = document.getElementsByName('remove');

let term_definition = document.getElementById('term_definition')

let listSet = document.querySelector('ul');

let zero = 0;

page_add.hidden = !page_add.hidden;
term_definition.hidden = !term_definition.hidden;
page_modify.hidden = !page_modify.hidden;

const liMaker = function (arg) {

	let li = document.createElement('li');
	let span = document.createElement('span');
	span.textContent = arg;
	let div = document.createElement('div');
	div.className = 'set_buttons';
	let btnEdit = document.createElement('button');
	btnEdit.type = 'button';
	btnEdit.name = 'edit';
	let a = document.createElement('a');
	a.href = '#/modify/:item';
	a.innerHTML = 'Edit';
	let btnDelete = document.createElement('button');
	btnDelete.type = 'button';
	btnDelete.name = 'delete';
	btnDelete.innerHTML = 'Remove';
	
	listSet.appendChild(li);
	li.appendChild(span);
	li.appendChild(div);
	div.appendChild(btnEdit);
	btnEdit.appendChild(a);
	div.appendChild(btnDelete);
}

const closePageAddSet = function () {

	main_page.hidden = !main_page.hidden;
	page_add.hidden = !page_add.hidden;

	if (!term_definition.hidden) {
		term_definition.hidden = !term_definition.hidden;
	}
}

const purgeValue = function () {

	inptName.value = inptTerm.value = inptDefinition.value = '';
}

const purgeStorage = function (arg) {

	localStorage.removeItem(arg);
	localStorage.removeItem(arg + 'T');
	localStorage.removeItem(arg + 'D');
}

const open_closePageModify = function () {

	main_page.hidden = !main_page.hidden;
	page_modify.hidden = !page_modify.hidden;
}

btnAddnew.onclick = function (event) {

	main_page.hidden = !main_page.hidden;
	page_add.hidden = !page_add.hidden;
}

listSet.addEventListener('click', {
	
	handleEvent(event) {
		
		let n = listSet.childElementCount - 1;
		
		for (let i = 0; i <= n; i++) {
			
			let liChild = listSet.children[i];
			let span = liChild.querySelector('span');
			let textName = liChild.textContent[zero];

			if (event.target === liChild.querySelector('button[name=delete]')) {
				
				purgeStorage(textName);
				liChild.remove();
				break;
			}

			if (event.target === liChild.querySelector('a')) {
				open_closePageModify();
				editSet(textName);
				liChild.remove();
				break;
		
			}

			if (event.target === span && liChild.className !== 'studied') {
				liChild.className = 'studied';
				listSet.appendChild(liChild);
				break; 
			}
		}
	}
});

const editSet = function (arg) {

	let modifySet = document.forms.modifyset;
	let editName = modifySet.elements.name;
	let editTerm = modifySet.elements.term;
	let editDefinition = modifySet.elements.definition;
	editName.value = localStorage.getItem(arg);
	editTerm.value = localStorage.getItem(arg + 'T');
	editDefinition.value = localStorage.getItem(arg + 'D');

	editName.onchange = function () {
		
		if (editName.value !== '') {
			localStorage.setItem(editName.value, editName.value);
			localStorage.setItem(editName.value + 'T', editTerm.value);
			localStorage.setItem(editName.value + 'D', editDefinition.value);
		}
	}

	editTerm.onchange = function () {

		localStorage.setItem(editName.value + 'T', editTerm.value);
	}

	editDefinition.onchange = function () {
		
		localStorage.setItem(editName.value + 'D', editDefinition.value);
	}

	btnSave[1].onclick = function (event) {
		if (editName.value !== arg) {
			purgeStorage(arg);
			open_closePageModify();
			liMaker(editName.value);
		} else {
			liMaker(arg);
		}
	
	}

	
}
	
	

btnCancel[zero].onclick = function (event) {

	closePageAddSet();
	purgeValue();
}

btnAddTerms[zero].onclick = function (event) {

	term_definition.hidden = !term_definition.hidden;
}

btnSave[zero].onclick = function (event) {

	closePageAddSet();
	
	if (inptName.value) {		
		liMaker(inptName.value);
		purgeValue();
	} else {
		purgeValue();
		purgeStorage(inptName.value);
	}
	
}

btnRemove[zero].onclick = function (event) {

	inptTerm.value = '';
	inptDefinition.value = '';
	localStorage.removeItem(inptName.value + 'T');
	localStorage.removeItem(inptName.value + 'D');
}



let newset = document.forms.newset;
let inptName = newset.elements.name;

inptName.oninput = function () {
	
	localStorage.setItem(inptName.value, inptName.value);
}

let inptT_D = term_definition.querySelectorAll('input'); 
let inptTerm = inptT_D[zero];
let inptDefinition = inptT_D[1];

inptTerm.oninput = function () {

	localStorage.setItem(inptName.value + 'T', inptTerm.value);
}

inptDefinition.oninput = function () {

	localStorage.setItem(inptName.value + 'D', inptDefinition.value);
}