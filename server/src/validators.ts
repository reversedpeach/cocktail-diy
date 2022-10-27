async function validateRegisterInput(name: String, email: String, password: String, confirmPassword: String) {
    const errors: { name: String | null, email: String | null, password: String | null, confirmPassword: String | null } = { name: null, email: null, password: null, confirmPassword: null };
    var foundError = false;
    if (name.trim() === '') {
        errors.name = 'Username must not be empty';
        foundError = true;
    }
    if (email.trim() === '') {
        errors.email = 'Email must not be empty';
        foundError = true;
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if (!email.match(regEx)) {
            errors.email = 'Email must be a valid email address';
            foundError = true;
        }
    }
    if (password === '') {
        errors.password = 'Password must not empty';
        foundError = true;
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords must match';
        foundError = true;
    }

    return foundError;
}

async function validateLoginInput(email: String, password: String) {
    const errors: { email: String | null, password: String | null } = { email: null, password: null };
    var foundError = false;
    if (email.trim() === '') {
        errors.email = 'Email must not be empty';
        foundError = true;
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if (!email.match(regEx)) {
            errors.email = 'Email must be a valid email address';
            foundError = true;
        }
    }
    if (password.trim() === '') {
        errors.password = 'Password must not be empty';
        foundError = true;
    }

    return foundError;
}

export { validateLoginInput, validateRegisterInput }
