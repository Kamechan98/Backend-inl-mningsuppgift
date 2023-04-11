const Order = require('../schemas/orderSchema');

//Funktion som skapar en order
exports.addOrder = async (req, res) => {
    //Skapar en order med userId från den inloggade, plus en order med Schemat orderRows
        const { userId, orderRows } = req.body;

        //om id eller orderRows inte matchar får man error
        if(!userId || !orderRows ) {
            return res.status(400).json({ message: 'You need to enter all fields' })
        }
    
        const order = await Order.create({ userId, orderRows })
        //Om det går igenom skapas ordern 
        if(!order) {
            return res.status(500).json({ message: 'Something went wrong when adding the book' })
        }
        res.status(201).json(order)
    
    }

    //Funktion som hämtar alla ordrar en användare har
    exports.getOrders = async (req, res) => {
        //Hämtar alla ordrar kopplade till id till den som är inloggad
        const orders = await Order.find({ userId: req.userId })

        res.status(200).json(orders)
}