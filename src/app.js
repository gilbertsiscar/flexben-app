const express = require('express');
const app = express();

const ApiError = require('./error-handler/ApiError');
const handleError = require('./error-handler/handleError');

const authRoutes = require('./routes/AuthRoutes');
const cutoffRoutes = require('./routes/CutoffRoutes');
const reimbursementRoutes = require('./routes/ReimbursementRoutes');
const { tokenAuthentication } = require('./middlewares/TokenAuthentication');

app.use(express.json());
app.disable('x-powered-by');

app.use('/api', authRoutes);
app.use('/api/cutoffs', tokenAuthentication, cutoffRoutes);
app.use('/api/reimbursements', tokenAuthentication, reimbursementRoutes);

// handle undefined routes
app.use('*', (_req, _res, next) => {
  next(new ApiError('Not Found', 404));
});

app.use((err, req, res, next) => {
  const error = handleError(err);
  res.status(error.statusCode).json({ error });
});

module.exports = app;
