const proxy = [
    {
      context: '/servicos',
      target: 'http://localhost:8080',
      pathRewrite: {'^/servicos' : ''}
    }
  ];
  module.exports = proxy;