function axiosCancelRequest(axios){
  var call;
  return function(config) {
    if (typeof config !== 'object') {
      throw new Error('axios config is required');
    }
    if (!config.url) {
      throw new Error('API Url is not included in config');
    }
    if (call) {
      call.cancel();
    }
    call = axios.CancelToken.source();
    return axios({
      ...config,
      cancelToken: call.token,
    });
  };
};

module.exports = axiosCancelRequest