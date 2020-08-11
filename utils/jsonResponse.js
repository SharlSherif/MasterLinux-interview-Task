const responseObject = ({ isSuccess, data = [], message = "" }) =>
    ({ success: isSuccess, data, message })

module.exports = responseObject