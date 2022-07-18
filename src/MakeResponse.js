const MakeReponse = (statusCode, body) => {
  switch (statusCode) {
    case 200:
      return {
        statusCode,
        status: 'OK',
        body,
      };
    case 201:
      return {
        statusCode,
        status: 'CREATED',
        body,
      };
    case 204:
      return {
        statusCode,
        status: 'NO_CONTENT',
      };
  }
};

module.exports = MakeReponse;
