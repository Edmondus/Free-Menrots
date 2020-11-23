import User from '../models/User'

// @desc Get all mentors
// @route GET /api/v1/mentors
// @access Public

export const getMentors = async (req, res, next) => {
    try {
        const users = await User.find({isMentor: true});

        return res.status(200).json({
            success: true,
            status: 200,
            count: users.length,
            data: users
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            status: 500,
            error: 'Server error'
        });
    }
}

// @desc User can sign up
// @route GET /api/v1/auth/signup
// @access Public

export const signUp = async (req, res, next) => {
    try {
        const user = await User.create(req.body);

        return res.status(201).json({
            success: true,
            status: 201,
            message: 'User created successfully',
            data: user
        });
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

// @desc User can sign in
// @route GET /api/v1/auth/signin
// @access Public

export const signIn = async (req, res, next) => {
    
}

// @desc Admin can change user to mentor
// @route GET /api/v1/user/:_id
// @access Private

export const toMentor = async (req, res, next) => {
    try {
        const user = await User.findById(req.params._id);

        if(!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

       await User.updateOne({isMentor: true});

        return res.status(201).json({
            success: true,
            status: 201,
            message: 'User updated successfully',
            data: user
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            status: 500,
            error: 'Server error'
        });
    }
}

// @desc Get specific mentor
// @route GET /api/v1//mentors/:_id
// @access Public

export const getMentor = async (req, res, next) => {
    try {
        const user = await User.findById(req.params._id,);

        if(!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        return res.status(200).json({
            success: true,
            status: 200,
            data: user
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            status: 500,
            error: 'Server error'
        });
    }
}

// @desc Delete user
// @route DELETE /api/v1/user/:id
// @access Private

export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params._id);

        if(!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        await user.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
