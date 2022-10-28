const form = document.forms['signup_form'];
const table = document.getElementById('table');
const male = document.getElementById('male');
const female = document.getElementById('female');
const pattern = /^[A-za-z0-9_]+@[a-z]+\.[a-z]{2,3}$/;
const password_pattern = /^[A-za-z0-9_]{7,14}$/;
const name_pattern = /^[A-Z]+[a-z '-.,`]{2,22}$|^[А-ЯЄІ]+[а-яєі '-.,`]{2,22}$/gm;
let counter = 0;

function clearForm() {
    form.email.value = '';
    form.password.value = '';
    form.name.value = '';
    form.surname.value = '';
    form.middlename.value = '';
    form.date.value = '';
    form.groups.value = 'Group...';
    male.checked = true;
    female.checked = false;
    form.phone.value = '';
}

function showErr(errElem, errMes) {
    document.querySelector('.' + errElem).innerHTML = errMes;
}

function clearErr(errElem) {
    document.querySelector('.' + errElem).innerHTML = '';
}

function DelTableRow() {
    let count2 = 0;
    if (table.rows.length > 1) {
        for (let i = 0; i < table.rows.length; i++) {
            let chk2 = table.rows[i].cells[10].childNodes[0];
            if (chk2.checked) {
                table.deleteRow(i);
                i--;
                --counter;
                count2 += 1;
            }
        }
        if (count2 === 0) {
            alert("Please select the row that you want to delete.");
        }
    } else {
        alert("There are no rows being added");
    }
}

function AddTableRow() {
    let count1 = 0;
    let tR = [];
    if (table.rows.length > 1) {
        for (let i = 0; i < table.rows.length; i++) {
            let chk1 = table.rows[i].cells[10].childNodes[0];
            let tr = document.createElement('tr');
            tr.innerHTML = table.rows[i].innerHTML;
            if (chk1.checked) {
                tR.push(tr);
                for (let obj in tR) {
                    let value = tR[obj];
                    document.querySelector('tbody').appendChild(value);
                }
                ++counter;
                count1 += 1;
            }
        }
        if (count1 === 0) {
            alert("Please select the row that you want to duplicate.");
        }
    } else {
        alert("There are no rows being added");
    }
}

function createCol() {
    document.querySelector('thead').innerHTML = `
    <tr>
        <th>Students</th>
        <th>Email</th>
        <th>Password</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Middle-name</th>
        <th>Birthday</th>
        <th>Group</th>
        <th>Gender</th>
        <th>Phone</th>
        <th>Select</th>
    </tr>`;
}

function createBut() {
    document.querySelector('.delete-add-buttons').innerHTML = `
        <button id="delete" type="button" name="delete" onclick="DelTableRow()">Delete row/s</button>
        <button id="add" type="button" name="add" onclick="AddTableRow()">Duplicate row/s</button>
    `;
}

function createRow() {
    document.querySelector('tbody').innerHTML +=
        `<tr>` +
        `<td>` + ++counter + `</td>` +
        `<td>` + form.email.value + `</td>` +
        `<td>` + form.password.value + `</td>` +
        `<td>` + form.name.value + `</td>` +
        `<td>` + form.surname.value + `</td>` +
        `<td>` + form.middlename.value + `</td>` +
        `<td>` + form.date.value + `</td>` +
        `<td>` + form.groups.value + `</td>` +
        `<td>` + form.gender.value + `</td>` +
        `<td>` + form.phone.value + `</td>` +
        `<td><input type="checkbox" id="` + counter + `" /></td>` +
        `</tr>`
    ;
}

Date.prototype.getWeek = function() {
    let date = new Date(this.getTime());

    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    let week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
        - 3 + (week1.getDay() + 6) % 7) / 7);
}

form.email.onchange = () => {
    if (form.email.value === '') {
        showErr('email-error', 'You have to enter your email');
        return false;
    }
    if (!form.email.value.match(pattern)) {
        showErr('email-error', 'Invalid email');
        return false;
    } else {
        clearErr('email-error');
    }
}
form.password.onchange = () => {
    if (form.password.value === '') {
        showErr('password-error', 'You have to enter your password');
        return false;
    }
    if (!form.password.value.match(password_pattern)) {
        showErr('password-error', 'Password must be between 7 and 14');
        return false;
    } else {
        clearErr('password-error');
    }
}
form.name.onchange = () => {
    if (form.name.value === '') {
        showErr('name-error', 'You have to enter your name');
        return false;
    }
    if (!form.name.value.match(name_pattern)) {
        showErr('name-error', 'Name Invalid');
        return false;
    } else {
        clearErr('name-error');
    }
}
form.surname.onchange = () => {
    if (form.surname.value === '') {
        showErr('surname-error', 'You have to enter your surname');
        return false;
    }
    if (!form.surname.value.match(name_pattern)) {
        showErr('surname-error', 'Surname Invalid');
        return false;
    } else {
        clearErr('surname-error');
    }
}
form.middlename.onchange = () => {
    if (form.middlename.value === '') {
        showErr('middle-name-error', 'You have to enter your middle-name');
        return false;
    }
    if (!form.middlename.value.match(name_pattern)) {
        showErr('middle-name-error', 'Middle-name Invalid');
        return false;
    } else {
        clearErr('middle-name-error');
    }
}
form.date.onchange = () => {
    let input = form.date.value;
    let birthday = new Date(input);
    let today = new Date();

    if (form.date.value === '') {
        showErr('date-error', 'You have to enter your birthday');
        return false;
    }
    if (birthday > today || (birthday.getWeek() === today.getWeek() && birthday.getDay() === today.getDay())) {
        showErr('date-error', 'Your birthday cannot be in the future');
        return false;
    } else {
        clearErr('date-error');
    }
}
form.groups.onchange = () => {
    if (form.groups.value === 'Group...') {
        showErr('groups-error', 'You have to choose your group');
        return false;
    } else {
        clearErr('groups-error');
    }
}
form.phone.onchange = () => {
    if (form.phone.value === '') {
        showErr('phone-error', 'You have to enter your phone');
        return false;

    }
    if (form.phone.value.length < 17) {
        showErr('phone-error', 'You have to enter all digits');
        return false;
    } else {
        clearErr('phone-error');
    }
}

function checkInputs() {

    if (form.email.value === '') {
        showErr('email-error', 'You have to enter your email');
    }
    if (form.password.value === '') {
        showErr('password-error', 'You have to enter your password');
    }
    if (form.name.value === '') {
        showErr('name-error', 'You have to enter your name');
    }
    if (form.surname.value === '') {
        showErr('surname-error', 'You have to enter your surname');
    }
    if (form.surname.value === '') {
        showErr('surname-error', 'You have to enter your surname');
    }
    if (form.middlename.value === '') {
        showErr('middle-name-error', 'You have to enter your middle-name');
    }
    if (form.date.value === '') {
        showErr('date-error', 'You have to enter your birthday');
    }
    if (form.groups.value === 'Group...') {
        showErr('groups-error', 'You have to choose your group');
    }
    if (form.phone.value === '') {
        showErr('phone-error', 'You have to enter your phone');
    }
}

form.onsubmit = function (event) {
    event.preventDefault();

    let input = form.date.value;
    let birthday = new Date(input);
    let today = new Date();

    checkInputs()

    if (form.email.value === '') {
        showErr('email-error', 'You have to enter your email');
        return false;
    }
    if (!form.email.value.match(pattern)) {
        showErr('email-error', 'Invalid email');
        return false;
    }
    if (form.password.value === '') {
        showErr('password-error', 'You have to enter your password');
        return false;
    }
    if (!form.password.value.match(password_pattern)) {
        showErr('password-error', 'Password must be between 7 and 14');
        return false;
    }
    if (form.name.value === '') {
        showErr('name-error', 'You have to enter your name');
        return false;
    }
    if (!form.name.value.match(name_pattern)) {
        showErr('name-error', 'Name Invalid');
        return false;
    }
    if (form.surname.value === '') {
        showErr('surname-error', 'You have to enter your surname');
        return false;
    }
    if (!form.surname.value.match(name_pattern)) {
        showErr('surname-error', 'Surname Invalid');
        return false;
    }
    if (form.middlename.value === '') {
        showErr('middle-name-error', 'You have to enter your middle-name');
        return false;
    }
    if (!form.middlename.value.match(name_pattern)) {
        showErr('middle-name-error', 'Middle-name Invalid');
        return false;
    }
    if (form.date.value === '') {
        showErr('date-error', 'You have to enter your birthday');
        return false;
    }
    if (birthday > today || (birthday.getWeek() === today.getWeek() && birthday.getDay() === today.getDay())) {
        showErr('date-error', 'Your birthday cannot be in the future');
        return false;
    }
    if (form.groups.value === 'Group...') {
        showErr('groups-error', 'You have to choose your group');
        return false;
    }
    if (form.phone.value === '') {
        showErr('phone-error', 'You have to enter your phone');
        return false;
    }
    if (form.phone.value.length < 17) {
        showErr('phone-error', 'You have to enter all digits');
        return false;
    }
    createBut();
    createCol();
    createRow();
    clearForm();
}
