export default defineEventHandler((event)=> {

    const auth = getCookie(event, 'authX');

    if(!auth || auth !== 'secretToken') {
        console.log('Error Token!');
}

    event.context.user = {
        id: 'sdfsdfsd',
        name: 'Reiby'
    }
});