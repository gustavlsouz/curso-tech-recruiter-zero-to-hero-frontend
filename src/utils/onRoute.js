module.exports = function onRoute(route, callback) {
  if (window.location.pathname === route) {
    callback();
  }
};
