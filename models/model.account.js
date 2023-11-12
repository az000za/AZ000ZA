module.exports = function(mongoose) {
    const AccountSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
        },
        userType: {
            enum: ["AI", "PPL"],
            required: true,
        },
        priveledge: {
            enum: ["Parent","Child"]        // parent is admin ... childs are basic user ... node parent ... child relationship
        },
        email: {
            type: String,
            required: true,
        },
        bcryptedPassword: {
            type: String,
            required: true,
        },
        loggedIn: {
            type: Boolean,
            default: false,
        },
        orgName: {  // organization name
            type: String,
            required: true,
        },
    });
    const Account = mongoose.model('Account', AccountSchema);
    return PPL;
}