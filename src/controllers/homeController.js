let getHomePage = (req, res) => {
  let data = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  return res.render('homepage.ejs',{data});
};

module.exports = {getHomePage}
