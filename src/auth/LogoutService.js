const LogoutService = ({ blacklistedDb }) => {
  return (token) => {
    blacklistedDb.add(token);
    return 'You have been Logged Out';
  };
};

module.exports = LogoutService;
