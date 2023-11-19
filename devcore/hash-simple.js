module.exports = function simpleHash(data) {
    let result = 0;
    for (let char of data) {
      result ^= char.charCodeAt();
    }
    return result;
}