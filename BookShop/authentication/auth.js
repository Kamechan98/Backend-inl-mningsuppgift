const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

//Funktion som skapar en Token när en användare loggar in
exports.generateToken = (user) => {
    return jwt.sign({ _id: user._id }, secretKey, { expiresIn: '1d'})
}

//Funktion som kollar token hos en användare
exports.verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        //Sparar ID på den som är inloggad i req.userId
        req.userId = jwt.verify(token, secretKey)._id;
      
        next();
    
      } catch {
        return res.status(401).json({
        message: 'Please login first'
      })
    }
  }
  