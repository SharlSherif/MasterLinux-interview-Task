const responseObject = ({ isSuccess, data = [], message = "" }) => ({
  success: isSuccess,
  data,
  message: message.toString(),
});

module.exports = responseObject;
