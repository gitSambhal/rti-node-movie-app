exports.responseHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .then((data) => successResp(data, res, next))
    .catch((error) => errorResp(error, res, next));
};

function successResp(data, res, next) {
  let respObj = {}
  respObj = data || {};
  respObj.status = 1
  return res.json(respObj)
}

function errorResp(data, res, next) {
  return next(data);
}

exports.errorThrow404 = (message) => {
  let error = new Error(message)
  error.statusCode = 404;
  throw error;
}