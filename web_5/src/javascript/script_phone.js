// <input type="text" id="phone" className="mphone" onKeyPress="mask(this, mphone);" onBlur="mask(this, mphone);">
// function mphone(v) {
//     let r = v.replace(/\D/g,"");
//     r = r.replace(/^0/,"");
//     if (r.length > 10) {
//         // 11+ digits. Format as 5+4.
//         r = r.replace(/^(\d\d)(\d{3})(\d{2})(\d{2}).*/,"+38(0$1)$2-$3-$4");
//     }
// else if (r.length > 5) {
//     // 6..10 digits. Format as 4+4
//     r = r.replace(/^(\d\d\d)(\d{3})(\d{0,2}).*/,"+38(0$1)$2-$3");
// }
    // else if (r.length > 5) {
    //     // 3..5 digits. Add (0XX..)
    //     r = r.replace(/^(\d\d\d)(\d{0,3})/,"+38(0$1)$2");
    // }
    // else {
    //     // 0..2 digits. Just add (0XX
    //     r = r.replace(/^(\d*)/, "+38(0$1");
    // }
//     return r;
// }
// let inputPhone = document.getElementById('phone');
// document.querySelector('.mphone').addEventListener('keypress', ()=>{mask(inputPhone.value, mphone())});
// document.querySelector('.mphone').addEventListener('blur', mask(inputPhone.value, mphone()));
//
// function mask(o, f) {
//     setTimeout(function () {
//         let v = f(o.value);
//         if (v !== o.value) {
//             o.value = v;
//         }
//     }, 0);
// }
//
// function mphone(v) {
//     var r = v.replace(/\D/g,"");
//     r = r.replace(/^0/,"");
//     // if (r.length > 11) {
//     //     // 11+ digits. Format as 5+4.
//     //     r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/,"(0$1) $2-$3");
//     // }
//     // else if (r.length > 6) {
//     //     // 6..10 digits. Format as 4+4
//     //     r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/,"(0$1) $2-$3");
//     // }
//     if (r.length > 3) {
//         // 3..5 digits. Add (0XX..)
//         r = r.replace(/^(\d\d)(\d{0,5})/,"+38(0$2)");
//     }
//     else {
//         // 0..2 digits. Just add (0XX
//         r = r.replace(/^(\d*)/, "+38(0");
//     }
//     return r;
// }

