module.exports.profile = function(req, res){
    return res.render("user_profile" // <- this is a ejs file name
    ,{
        title: 'User Profile'
    });
}