function User(name, lastName, email, password) {       // Accept name and age in the constructor
    this.name = name || "";
    this.lastName = lastName || "";
    this.email = email || "";
    this.password = password || "";
}

User.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

module.exports = User;     // Export the User function as it is