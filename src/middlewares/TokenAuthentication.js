const { verifyToken } = require('../jwt');
const blacklistedDb = require('../black-listed-tokens');

exports.tokenAuthentication = (req, _res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  try {
    if (blacklistedDb.get(token)) {
      throw new Error('Invalid token');
    }
    const decoded = verifyToken(token);
    req.id = decoded.id;
    req.role = decoded.role;
    next();
  } catch (e) {
    next(e);
  }
};
