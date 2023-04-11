const User = require('../schemas/userSchema');
const bcrypt = require('bcryptjs');
const auth = require('../authentication/auth');

//Funktion som lägger till en användare
exports.addUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({
          message: 'You need to enter all the fields'
        })
      }
      //saltar det lösenord som en användare 10 ggr = krypterar ett lösenord för säkerhetskäl
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const _user = new User({ firstName, lastName, email, passwordHash: hash })

    const user = await _user.save()

    res.status(201).json(auth.generateToken(user))

}
//Funktion som loggar in en användare
exports.login = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(400).json({
            message: 'You need to enter all fields'
        })
    }
    //Letar efter den email som användaren försöker logga in med
    const user = await User.findOne({ email }) 

        if(!user) {
            return res.status(401).json({
                message: 'Email doesnt exist'
            })
        }
        //Jämför lösenord som användaren skriver in med det krypterade lösenordet för att se om det matchar
        const result = await bcrypt.compare(password, user.passwordHash)
            if(!result) {
                return res.status(401).json({
                  message: 'email or password doesnt exist'
                })
              }

              res.status(201).json({ token: auth.generateToken(user) })
}