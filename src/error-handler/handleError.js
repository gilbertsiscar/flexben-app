const handleError = (error) => {
  switch (error.statusCode) {
    case 404:
      return {
        statusCode: error.statusCode,
        status: 'NOT_FOUND',
        message: error.message,
      };
    case 401:
      return {
        statusCode: error.statusCode,
        status: 'UNAUTHORIZED',
        message: error.message,
      };
    case 403:
      return {
        statusCode: error.statusCode,
        status: 'FORBIDDEN',
        message: error.message,
      };

    default:
      return {
        statusCode: 500,
        status: 'INTERNAL_SERVER_ERROR',
        message: error.message,
      };
  }
};

module.exports = handleError;
