const dbUser = require('../modal/user')
const dbService = require('../services/database_service')



exports.CreateBlog = async (req, res, next) => {

        let response = await dbService.add("blog", req.body);
    try {
            return res.status(201).json({
                    message: 'File uploded successfully'
            });
    } catch (error) {
            console.error(error);
    }
}