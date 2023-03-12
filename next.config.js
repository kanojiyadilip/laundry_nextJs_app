module.exports = {
  exportPathMap: async function (defaultPathMap) {
    return {
      '/auth/index.html': { page: '/auth' },
    };
  }
}