const errorHandlerMiddleware = (err, req, res, next) => {
    if (err.name === 'CastError') {
        return res.status(404).json({ msg: `No task with id: ${err.value}` });
    }

    if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map((item) => item.message).join(', ');
        return res.status(400).json({ msg: messages });
    }

    return res.status(500).json({ msg: err.message || 'Something went wrong, please try again' });
};

module.exports = errorHandlerMiddleware;
