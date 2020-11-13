import User from '../../modules/tableMongoose/data'
import dbConnect from '../../modules/connectMongoose/connect'

dbConnect();

export default async (req, res) => {
    const { method } = req
    // await User.create({ title: 'tieu de', name: 'ddd' })
    switch (method) {
        case 'GET':
            try {
                const note = User.find({})
                res.json({ success: true, data: note })
            } catch (error) {
                res.json({ success: false }, error.message)
            }
            break
        case 'POST':
            try {
                const note1 = User.create(req.body)
                res.json({ success: true, data: note1 })
            } catch (error) {
                res.json({ success: false }, error.message)
            }
            break
        default:
            res.json({ success: false })
            break
    }


}