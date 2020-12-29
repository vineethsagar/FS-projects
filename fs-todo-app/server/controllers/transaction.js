const TodoModel = require('../models/todoModel');

exports.allTodos= async(req,res)=>{
    try {
        const allTodos =await TodoModel.find();
        return res.status(200).json({
            success :true,
            data:allTodos
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error.message
        })
    }
    
}

exports.addTodo = async(req,res)=>{
    try {
        const addSingle =  await TodoModel.create(req.body);
        return res.status(201).json({
            success:true,
            data:addSingle
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            error:error
        })
    }
}

exports.deleteTodo = async (req,res)=>{
    try {
        const transaction = await TodoModel.findById(req.params.id);
        
        console.log(transaction)

        if(!transaction) {
            return res.status(404).json({
            success: false,
            error: 'No transaction found'
            })
        }
    
        await transaction.remove();
    
        return res.status(200).json({
            success: true,
            data: {}
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success:false,
            error:error
        })
    }
}
/* 
const deleteSingle = TodoModel.findById(req.body.id);

        if(!deleteSingle){
            return res.status(404).json({
                success:false,
                error:"No transaction found"
            })
         */