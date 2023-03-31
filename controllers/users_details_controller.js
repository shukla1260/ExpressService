module.exports.details = function(req, res){
    return res.render("details" // <- this is a ejs file name
    ,{
        title: 'User Details'
    });
    //return res.end('<h1>Welcome to user Profile!</h1>');
}

