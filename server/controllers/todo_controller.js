const prismaClient = require('../prisma/db_config').prismaClient;



class TodoController {

    static getAllTodo = async(req, res) => {
        try {
            const payload = await prismaClient.todo.findMany();
            return res.status(200).json(payload);
        } catch (err) {
            console.log(err);
            return res.status(400).json({err: String(err)});
        }
    };

    static getTodo = async(req, res) => {
        const id = parseInt(req.params.id);
        try {
            const payload = await prismaClient.todo.findUnique({
                where: {id: id}
            });
            return res.status(200).json(payload);
        } catch(err) {
            console.log(err);
            return res.status(400).json({err: String(err)});
        }  
 
    }

    static createTodo = async(req, res) => {
        const description = req.body.description;
        try {
            const payload = await prismaClient.todo.create({
                data: {
                    description: description
                }
            })
            return res.status(201).json(payload)
        } catch (err) {
            console.log(err);
            return res.status(400).json({err: String(err)});
        }
    };

    static updateNote = async(req, res) => {
        const id = parseInt(req.params.id);
        const description = req.body.description;
        try {
            const payload = await prismaClient.todo.update({
                where: {id: id},
                data: {description: description}
            })
            return res.status(200).json(payload);
        } catch(err) {
            console.log(err);
            return res.status(400).json({err: String(err)});
        }
    };


    static deleteTodo = async(req, res) => {
        const id = parseInt(req.params.id);
        try {
            await prismaClient.todo.delete({
                where: {id: id}
            })
            return res.status(200).json({'msg':'resource successfully deleted'})
        } catch(err) {
            console.log(err);
            return res.status(400).json({err: String(err)})
        }
    };


    static generateDummyData = async(req, res) => {
        let final_payload = []
        for (let i=0; i<7; i++) {
            try {
                const payload = await prismaClient.todo.create({
                    data: {
                        description: `This is todo item ${i}`
                    }
                })
                final_payload.push(payload);
            } catch (err) {
                console.log(err);
                return res.status(400).json({err: String(err)});
            }
        }
        return res.status(201).json(final_payload)
    }

}

module.exports = {TodoController};