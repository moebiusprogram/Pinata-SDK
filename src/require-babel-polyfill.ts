export default (() => {
    if (!global || ! (global as any)._babelPolyfill) {
        require('babel-polyfill');
    }
})();
