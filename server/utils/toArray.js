module.exports = function toArray(value) {
    return Array.isArray(value) ? value : [value];
};