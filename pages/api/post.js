import dbConnect from '../../utils/dbConnect';
import CustomerMessage from '../../models/customerMessage';

dbConnect();

export default async (req, res) => {
    // res.json({test: 'test'})

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                let data = await CustomerMessage.aggregate([{"$sort":{"created_on":-1}}]);

                res.status(200).json({ success: true, data: data })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                console.log("req.body=======>", req.body);
                let data = await CustomerMessage.create(req.body);
                // console.log("note=======>", note);
                res.status(201).json({ success: true, data: data })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}