// let isReady, isReadyEmail, isReadyPassword, isReadyName, isReadySurname, isReadyMiddlename, isReadyDate, isReadyGroups,
//     isReadyGender, isReadyPhone = false;
//
// function check() {
//     form.email.onchange = () => {
//         if (form.email.value === '') {
//             isReadyEmail = false;
//             showErr('email-error', 'You have to enter your email');
//             return false;
//         }
//         if (!form.email.value.match(pattern)) {
//             isReadyEmail = false;
//             showErr('email-error', 'Invalid email');
//             return false;
//         } else {
//             isReadyEmail = true;
//             clearErr('email-error');
//         }
//     }
//     form.password.onchange = () => {
//         if (form.password.value === '') {
//             isReadyPassword = false;
//             showErr('password-error', 'You have to enter your password');
//             return false;
//         }
//         if (!form.password.value.match(password_pattern)) {
//             isReadyPassword = false;
//             showErr('password-error', 'Password must be between 7 and 14');
//             return false;
//         } else {
//             isReadyPassword = true;
//             clearErr('password-error');
//         }
//     }
//     form.name.onchange = () => {
//         if (form.name.value === '') {
//             isReadyName = false;
//             showErr('name-error', 'You have to enter your name');
//             return false;
//         }
//         if (!form.name.value.match(name_pattern)) {
//             isReadyName = false;
//             showErr('name-error', 'Name Invalid');
//             return false;
//         } else {
//             isReadyName = true;
//             clearErr('name-error');
//         }
//     }
//     form.surname.onchange = () => {
//         isReadySurname = true;
//         if (form.surname.value === '') {
//             isReadySurname = false;
//             showErr('surname-error', 'You have to enter your surname');
//             return false;
//         }
//         if (!form.surname.value.match(name_pattern)) {
//             isReadySurname = false;
//             showErr('surname-error', 'Surname Invalid');
//             return false;
//         } else {
//             isReadySurname = true;
//             clearErr('surname-error');
//         }
//     }
//     form.middlename.onchange = () => {
//         if (form.middlename.value === '') {
//             isReadyMiddlename = false;
//             showErr('middle-name-error', 'You have to enter your middle-name');
//             return false;
//         }
//         if (!form.middlename.value.match(name_pattern)) {
//             isReadyMiddlename = false;
//             showErr('middle-name-error', 'Middle-name Invalid');
//             return false;
//         } else {
//             isReadyMiddlename = true;
//             clearErr('middle-name-error');
//         }
//     }
//     form.date.onmouseleave = () => {
//         let input = form.date.value;
//         let birthday = new Date(input);
//         let today = new Date();
//         if (form.date.value === '') {
//             isReadyDate = false;
//             showErr('date-error', 'You have to enter your birthday');
//             return false;
//         }
//         if (birthday.getFullYear() > today.getFullYear() || birthday.getMonth() > today.getMonth() || birthday.getDay() >= today.getDay()) {
//             isReadyDate = false;
//             showErr('date-error', 'Your birthday cannot be in the future');
//             return false;
//         } else {
//             isReadyDate = true;
//             clearErr('date-error');
//         }
//     }
//     form.groups.onmouseleave = () => {
//         if (form.groups.value === 'Group...') {
//             isReadyGroups = false;
//             showErr('groups-error', 'You have to choose your group');
//             return false;
//         } else {
//             isReadyGroups = true;
//             clearErr('groups-error');
//         }
//     }
//     form.gender.onmouseleave = () => {
//         if (form.gender.value === '') {
//             isReadyGender = false;
//             showErr('gender-error', 'You have to choose your gender');
//             return false;
//         } else {
//             isReadyGender = true;
//             clearErr('gender-error');
//         }
//     }
//     form.phone.onmouseleave = () => {
//         if (form.phone.value === '') {
//             isReadyPhone = false;
//             showErr('phone-error', 'You have to enter your phone');
//             return false;
//
//         }
//         if (form.phone.value.length < 17) {
//             isReadyPhone = false;
//             showErr('phone-error', 'You have to enter all digits');
//             return false;
//         } else {
//             isReadyPhone = true;
//             clearErr('phone-error');
//         }
//     }
// }
//
// form.onmouseleave = () => {
//     check();
//     if (isReadyEmail && isReadyPassword && isReadyName && isReadySurname && isReadyMiddlename && isReadyDate
//         && isReadyGroups && isReadyGender && isReadyPhone) {
//         isReady = true;
//     }
// }
//
// form.onsubmit = function (event) {
//     check();
//     event.preventDefault();
//     if (isReady === true) {
//         createBut();
//         createCol();
//         createRow();
//         clearForm()
//     }
// }