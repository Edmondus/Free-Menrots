export const checkName = (req, res, next) => {
    const { firstName, lastName } = req.body;
    const pattern = /^[A-Z]/;
    if (pattern.test(firstName) && pattern.test(lastName)) {
        return next();
    } else {
        return res.status(403).json({
            success: false,
            status: 403,
            message: 'First name and last name must start with a capital letter.',
        });
    }
}

export const checkEmail = (req, res, next) => {
    const { email } = req.body;
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (pattern.test(email)) {
        return next();
    } else {
        return res.status(403).json({
            success: false,
            status: 403,
            message: 'Invalid email or email already in use.',
        });
    }
}

export const checkPassword = (req, res, next) => {
    const { password } = req.body;
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,128}$/;
    if (pattern.test(password)) {
        return next();
    } else {
        return res.status(403).json({
            success: false,
            status: 403,
            message: 'Password must contain a special character, capital letter and a number and have at least 8 characters',
        });
    }
}

// export const checkMentor = (req, res, next) => {
//     const { isMentor } = req.body;
//     if (isMentor) {
//         return next();
//     } else {
//         return res.status(404).json({
//             success: false,
//             status: 404,
//             message: 'No mentor(s) found',
//         });
//     }
// }