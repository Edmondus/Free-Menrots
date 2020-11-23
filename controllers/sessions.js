// @desc Create session
// @route GET /api/v1/sessions
// @access Public

export const createSession = (req, res, next) => {
    res.send('CREATE_SESSION');
}

// @desc Accept a session
// @route GET /:sessionId/accept
// @access Public

export const acceptSession = (req, res, next) => {
    res.send('SESSION_ACCEPTED');
}

// @desc Reject a session
// @route GET /:sessionId/reject
// @access Public

export const rejectSession = (req, res, next) => {
    res.send('SESSION_REJECTED');
}