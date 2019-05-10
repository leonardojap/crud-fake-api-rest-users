//Objec type response to send tas res to all request from users
function Response(code, message, data) {
    this.code = code;
    this.message = message || "";
    this.data = data || {};
}

module.exports = Response;