exports.modelOptions = {
  timestamps: true,
  versionKey: false,
  virtual: true,
  toObject: { getters: true, setters: true, virtual: true },
  toJSON: { getters: true, setters: true, virtual: true },
  runGettersOnQuery: true,
  runSettersOnQuery: true,
};

exports.httpMethods = {
  GET: 'get',
  PUT: 'put',
  POST: 'post',
  PATCH: 'patch',
  DELETE: 'delete',
};

exports.defaultPaginationLimit = 50;
exports.defaultPage = 1;