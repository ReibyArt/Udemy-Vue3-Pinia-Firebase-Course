const errorCodes = (code) => {
    let msg = 'Sorry, try again later!'

    switch (code) {
        case 'auth/user-not-found':
            msg = 'User not found in DB!'
            break;
        case 'auth/email-already-in-use':
            msg = 'Email already to use!'
            break;
        case 'auth/wrong-password':
            msg = 'Wrong password, dude!'
            break;
        case 'auth/invalid-credential':
            msg = 'Sorry! Invalid Credential! '
            break;        
        default:
            msg = code;
    }
    return msg;
}

export default errorCodes;