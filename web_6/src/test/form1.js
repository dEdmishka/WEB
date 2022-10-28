// let form = document.forms['signup_form'];
// let table = document.getElementById('table');
// let pattern = /^[A-za-z0-9_]+@[a-z]+\.[a-z]{2,3}$/;
// let password_pattern = /^[A-za-z0-9_]{7,14}$/;
// let name_pattern = /^[a-zA-zа-юА-Ю]{2,20}$/;
//let name_pattern = /^[A-za-z0-9_]{2,20}$/;
// let counter = 0;
// let errCounter = 1;
//
//
// function clearForm() {
//     form.email.value = '';
//     form.password.value = '';
//     form.name.value = '';
//     form.surname.value = '';
//     form.middlename.value = '';
//     form.date.value = '';
//     form.groups.value = 'Group...';
//     form.phone.value = '';
// }
//
// function clearAllErr() {
//     clearErr('email-error');
//     clearErr('password-error');
//     clearErr('name-error');
//     clearErr('surname-error');
//     clearErr('middle-name-error');
//     clearErr('date-error');
//     clearErr('groups-error');
//     clearErr('gender-error');
//     clearErr('phone-error');
// }
//
// function showErr(errElem, errMes) {
//     document.querySelector('.' + errElem).innerHTML = errMes;
// }
//
// function clearErr(errElem) {
//     document.querySelector('.' + errElem).innerHTML = '';
// }
//
//
// function DelTableRow() {
//     let count2 = 0;
//     if (table.rows.length > 1) {
//         for (let i = 0; i < table.rows.length; i++) {
//             let chk2 = table.rows[i].cells[10].childNodes[0];
//             if (chk2.checked) {
//                 table.deleteRow(i);
//                 i--;
//                 --counter;
//                 count2 += 1;
//             }
//         }
//         if (count2 === 0) {
//             alert("Please select the row that you want to delete.");
//         }
//     } else {
//         alert("There are no rows being added");
//     }
// }
//
// function AddTableRow() {
//     let count1 = 0;
//     let tR = [];
//     if (table.rows.length > 1) {
//         for (let i = 0; i < table.rows.length; i++) {
//             let chk1 = table.rows[i].cells[10].childNodes[0];
//             let tr = document.createElement('tr');
//             tr.innerHTML = table.rows[i].innerHTML;
//             if (chk1.checked) {
//                 tR.push(tr);
//                 for (let obj in tR) {
//                     let value = tR[obj];
//                     document.querySelector('tbody').appendChild(value);
//                 }
//                 ++counter;
//                 count1 += 1;
//             }
//         }
//         if (count1 === 0) {
//             alert("Please select the row that you want to duplicate.");
//         }
//     } else {
//         alert("There are no rows being added");
//     }
// }
//
// function createCol() {
//     document.querySelector('thead').innerHTML = `
//     <tr>
//         <th>Students</th>
//         <th>Email</th>
//         <th>Password</th>
//         <th>Name</th>
//         <th>Surname</th>
//         <th>Middle-name</th>
//         <th>Birthday</th>
//         <th>Group</th>
//         <th>Gender</th>
//         <th>Phone</th>
//         <th>Select</th>
//     </tr>`;
// }
//
// function createBut() {
//     document.querySelector('.delete-add-buttons').innerHTML = `
//         <button id="delete" type="button" name="delete" onclick="DelTableRow()">Delete row/s</button>
//         <button id="add" type="button" name="add" onclick="AddTableRow()">Duplicate row/s</button>
//     `;
// }
//
// function createRow() {
//     document.querySelector('tbody').innerHTML +=
//         `<tr>` +
//         `<td>` + ++counter + `</td>` +
//         `<td>` + form.email.value + `</td>` +
//         `<td>` + form.password.value + `</td>` +
//         `<td>` + form.name.value + `</td>` +
//         `<td>` + form.surname.value + `</td>` +
//         `<td>` + form.middlename.value + `</td>` +
//         `<td>` + form.date.value + `</td>` +
//         `<td>` + form.groups.value + `</td>` +
//         `<td>` + form.gender.value + `</td>` +
//         `<td>` + form.phone.value + `</td>` +
//         `<td><input type="checkbox" id="` + counter + `" /></td>` +
//         `</tr>`
//     ;
// }
// form.email.onchange = ()=>{
//
//     if (form.email.value === '') {
//         showErr('email-error', 'You have to enter your email');
//         return false;
//     }
//     if (!form.email.value.match(pattern)) {
//         showErr('email-error', 'Invalid email');
//         return false;
//     }
//     else{
//         clearErr('email-error');
//     }
// }
// form.password.onchange = ()=>{
//     if (form.password.value === '') {
//         showErr('password-error', 'You have to enter your password');
//         return false;
//     }
//     if (!form.password.value.match(password_pattern)) {
//         showErr('password-error', 'Password must be between 7 and 14');
//         return false;
//     }
//     else{
//         clearErr('password-error');
//     }
// }
// form.name.onchange = ()=>{
//     if (form.name.value === '') {
//         showErr('name-error', 'You have to enter your name');
//         return false;
//     }
//     if (!form.name.value.match(name_pattern)) {
//         showErr('name-error', 'Name Invalid');
//         return false;
//     }
//     else{
//         clearErr('name-error');
//     }
// }
// form.surname.onchange = ()=>{
//     if (form.surname.value === '') {
//         showErr('surname-error', 'You have to enter your surname');
//         return false;
//     }
//     if (!form.surname.value.match(name_pattern)) {
//         showErr('surname-error', 'Surname Invalid');
//         return false;
//     }
//     else{
//         clearErr('surname-error');
//     }
// }
// form.middlename.onchange = ()=>{
//     if (form.middlename.value === '') {
//         showErr('middle-name-error', 'You have to enter your middle-name');
//         return false;
//     }
//     if (!form.middlename.value.match(name_pattern)) {
//         showErr('middle-name-error', 'Middle-name Invalid');
//         return false;
//     }
//     else{
//         clearErr('middle-name-error');
//     }
// }
// form.date.onchange = ()=> {
//     let input = form.date.value;
//     let birthday = new Date(input);
//     let today = new Date();
//     if (form.date.value === '') {
//         showErr('date-error', 'You have to enter your birthday');
//         return false;
//     }
//     if (birthday.getFullYear() > today.getFullYear() || birthday.getMonth() > today.getMonth() || birthday.getDay() >= today.getDay()) {
//         showErr('date-error', 'Your birthday cannot be in the future');
//         return false;
//     } else {
//         clearErr('date-error');
//     }
// }
// form.groups.onchange = ()=>{
//     if (form.groups.value === 'Group...') {
//         showErr('groups-error', 'You have to choose your group');
//         return false;
//     }
//     else{
//         clearErr('groups-error');
//     }
// }
// form.gender.onchange = ()=>{
//     if (form.gender.value === '') {
//         showErr('gender-error', 'You have to choose your gender');
//         return false;
//     }
//     else{
//         clearErr('gender-error');
//     }
// }
// form.phone.onchange = ()=>{
//     if (form.phone.value === '') {
//         showErr('phone-error', 'You have to enter your phone');
//         return false;
//     }
//     if (form.phone.value.length < 17) {
//         showErr('phone-error', 'You have to enter all digits');
//         return false;
//     }
//     else{
//         clearErr('phone-error');
//     }
// }
// function checkErr(errElem, elem) {
//     if(document.querySelector('.' + errElem).innerHTML === '') {
//         errCounter = 1;
//         console.log(errCounter)
//     }
//     else {
//         errCounter = 0;
//         console.log(errCounter)
//     }
// }
// function checkAllErr() {
//     checkErr('email-error', );
//     checkErr('password-error');
//     checkErr('name-error');
//     checkErr('surname-error');
//     checkErr('middle-name-error');
//     checkErr('date-error');
//     checkErr('groups-error');
//     checkErr('gender-error');
//     checkErr('phone-error');
// }
// form.onsubmit = function (event) {
//
//     event.preventDefault();
//     checkAllErr();
//
//     if(errCounter !== 0){
//         clearAllErr();
//         createBut();
//         createCol();
//         createRow();
//         clearForm();
//     }
//
//
// }
//
// //form.password.onchange = ()=>{
// //     if (form.password.value === '') {
// //         showErr('password-error', 'You have to enter your password');
// //         return false;
// //     }
// //     if (!form.password.value.match(password_pattern)) {
// //         showErr('password-error', 'Password must be between 7 and 14');
// //         return false;
// //     }
// //     else{
// //         clearErr('password-error');
// //     }
// // }
// // form.name.onchange = ()=>{
// //     if (form.name.value === '') {
// //         showErr('name-error', 'You have to enter your name');
// //         return false;
// //     }
// //     if (!form.name.value.match(name_pattern)) {
// //         showErr('name-error', 'Name Invalid');
// //         return false;
// //     }
// //     else{
// //         clearErr('name-error');
// //     }
// // }
// // form.surname.onchange = ()=>{
// //     if (form.surname.value === '') {
// //         showErr('surname-error', 'You have to enter your surname');
// //         return false;
// //     }
// //     if (!form.surname.value.match(name_pattern)) {
// //         showErr('surname-error', 'Surname Invalid');
// //         return false;
// //     }
// //     else{
// //         clearErr('surname-error');
// //     }
// // }
// // form.middlename.onchange = ()=>{
// //     if (form.middlename.value === '') {
// //         showErr('middle-name-error', 'You have to enter your middle-name');
// //         return false;
// //     }
// //     if (!form.middlename.value.match(name_pattern)) {
// //         showErr('middle-name-error', 'Middle-name Invalid');
// //         return false;
// //     }
// //     else{
// //         clearErr('middle-name-error');
// //     }
// // }
// // form.date.onchange = ()=> {
// //     let input = form.date.value;
// //     let birthday = new Date(input);
// //     let today = new Date();
// //     if (form.date.value === '') {
// //         showErr('date-error', 'You have to enter your birthday');
// //         return false;
// //     }
// //     if (birthday.getFullYear() > today.getFullYear() || birthday.getMonth() > today.getMonth() || birthday.getDay() >= today.getDay()) {
// //         showErr('date-error', 'Your birthday cannot be in the future');
// //         return false;
// //     } else {
// //         clearErr('date-error');
// //     }
// // }
// // form.groups.onchange = ()=>{
// //     if (form.groups.value === 'Group...') {
// //         showErr('groups-error', 'You have to choose your group');
// //         return false;
// //     }
// //     else{
// //         clearErr('groups-error');
// //     }
// // }
// // form.gender.onchange = ()=>{
// //     if (form.gender.value === '') {
// //         showErr('gender-error', 'You have to choose your gender');
// //         return false;
// //     }
// //     else{
// //         clearErr('gender-error');
// //     }
// // }
// // form.phone.onchange = ()=>{
// //     let ready = false;
// //     if (form.phone.value === '') {
// //         ready = false;
// //         showErr('phone-error', 'You have to enter your phone');
// //         return false;
// //
// //     }
// //     if (form.phone.value.length < 17) {
// //         showErr('phone-error', 'You have to enter all digits');
// //         return false;
// //     }
// //     else{
// //         clearErr('phone-error');
// //     }
// // }
// //
// // form.onsubmit = function (event) {
// //     event.preventDefault();
// //
// //             let input = form.date.value;
// //             let birthday = new Date(input);
// //             let today = new Date();
// //
// //             if (form.email.value === '') {
// //                 showErr('email-error', 'You have to enter your email');
// //                 return false;
// //             }
// //             if (!form.email.value.match(pattern)) {
// //                 showErr('email-error', 'Invalid email');
// //                 return false;
// //             }
// //             if (form.password.value === '') {
// //                 showErr('password-error', 'You have to enter your password');
// //                 return false;
// //             }
// //             if (!form.password.value.match(password_pattern)) {
// //                 showErr('password-error', 'Password must be between 7 and 14');
// //                 return false;
// //             }
// //             if (form.name.value === '') {
// //                 showErr('name-error', 'You have to enter your name');
// //                 return false;
// //             }
// //             if (!form.name.value.match(name_pattern)) {
// //                 showErr('name-error', 'Name Invalid');
// //                 return false;
// //             }
// //             if (form.surname.value === '') {
// //                 showErr('surname-error', 'You have to enter your surname');
// //                 return false;
// //             }
// //             if (!form.surname.value.match(name_pattern)) {
// //                 showErr('surname-error', 'Surname Invalid');
// //                 return false;
// //             }
// //             if (form.middlename.value === '') {
// //                 showErr('middle-name-error', 'You have to enter your middle-name');
// //                 return false;
// //             }
// //             if (!form.middlename.value.match(name_pattern)) {
// //                 showErr('middle-name-error', 'Middle-name Invalid');
// //                 return false;
// //             }
// //             if (form.date.value === '') {
// //                 showErr('date-error', 'You have to enter your birthday');
// //                 return false;
// //             }
// //             if (birthday.getFullYear() > today.getFullYear() || birthday.getMonth() > today.getMonth() || birthday.getDay() >= today.getDay()) {
// //                 showErr('date-error', 'Your birthday cannot be in the future');
// //                 return false;
// //             }
// //             if (form.groups.value === 'Group...') {
// //                 showErr('groups-error', 'You have to choose your group');
// //                 return false;
// //             }
// //             if (form.gender.value === '') {
// //                 showErr('gender-error', 'You have to choose your gender');
// //                 return false;
// //             }
// //             if (form.phone.value === '') {
// //                 showErr('phone-error', 'You have to enter your phone');
// //                 return false;
// //             }
// //             if (form.phone.value.length < 17) {
// //                 showErr('phone-error', 'You have to enter all digits');
// //                 return false;
// //             }
// //
// //             createBut();
// //             createCol();
// //             createRow();
// //             clearForm();
// //
// // }
