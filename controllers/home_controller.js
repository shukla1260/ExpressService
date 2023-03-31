module.exports.home = function(req, res){
    return res.render("home" // <- this is a ejs file name
    ,{
        title: 'Home'
    });
};
