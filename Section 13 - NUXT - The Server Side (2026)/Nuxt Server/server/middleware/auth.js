export default defineEventHandler((event)=> {

    const authTT = getCookie(event, 'authx');

    // console.log('This is console: ' + authTT);
//     if(!authTT || authTT !== 'secretToken') {
//         console.log('Error Token!');
// }

    event.context.user = {
        id: 'sdfsdfsd',
        name: 'Reiby'
    }
});