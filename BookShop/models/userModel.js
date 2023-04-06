const User = require('../schemas/userSchema');
const bcrypt = require('bcryptjs');
const auth = require('../authentication/auth');


exports.addUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({
          message: 'You need to enter all the fields'
        })
      }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const _user = new User({ firstName, lastName, email, passwordHash: hash })

    const user = await _user.save()

    res.status(201).json(auth.generateToken(user))

}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(400).json({
            message: 'You need to enter all fields'
        })
    }

    const user = await User.findOne({ email }) 

        if(!user) {
            return res.status(401).json({
                message: 'Email doesnt exist'
            })
        }

        const result = await bcrypt.compare(password, user.passwordHash)
            if(!result) {
                return res.status(401).json({
                  message: 'Incorrect credentials'
                })
              }

              res.status(201).json({ token: auth.generateToken(user) })
}



