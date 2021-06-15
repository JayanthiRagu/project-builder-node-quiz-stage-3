const express=require('express')
const app=express()
app.use(express.json())
const mongoose=require('mongoose')
const url="mongodb+srv://admin:admin@cluster0.izyvf.mongodb.net/quiz?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
const {question,option,answer}=require('./model')

const bodyParser=require('body-parser');
const cors=require('cors')
//server
const corsOption = {
    origin:'http://localhost:5000/'
}
//Parsing the req body in bodyparser middleware and enabling cors
app.use(bodyParser.json())
app.use(cors(corsOption))

//find all data from questions
app.get('/api/questions', async function(req,res){
    try{
        const questions=await question.find()
        res.json({
            questions,
            message :"Records Found"
        })
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})

//find particular questions
app.get('/api/questions/:id', async function(req,res){
    try{
        const questions=await question.findOne({question_id:req.params.id})
        if(questions)
        {
            res.json({
                questions,
                message :"Records Found"
            })
        }
        else{
            res.json({
                message: "No question is available for specified id"
            })
        }
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})

//insert into questions
app.post('/api/questions', async function(req,res){
    try{
        const questions=await new question(req.body)
        await questions.save()
        res.json({
            questions,
            message :"Records Posted"
        })
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})

//update into questions
app.put('/api/questions/:id', async function(req,res){
    try{
        const questions=await question.updateOne({"question_id":req.params.id},req.body)
        if(questions.nModified==1)
        {
            res.json({
                questions,
                message :"Records Updated"
            })
        }
        else{
            res.json({
                message: "No question is available"
            })
        }
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})


//delete questions
app.delete('/api/questions/:id', async function(req,res){
    try{
        const questions=await question.findOneAndDelete({"question_id":req.params.id})
        if(questions)
        {
            res.json({
                questions,
                message :"Record Deleted"
            })
        }
        else{
            res.json({
                message: "No question is available"
            })
        }
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})


//find all data from options
app.get('/api/options', async function(req,res){
    try{
        const options=await option.find()
        res.json({
            options,
            message :"Records Found"
        })
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})

//find particular options
app.get('/api/options/:id', async function(req,res){
    try{
        const options=await option.findOne({option_id:req.params.id})
        if(options)
        {
            res.json({
                options,
                message :"Records Found"
            })
        }
        else{
            res.json({
                message: "No option is available for specified id"
            })
        }
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})

//insert into options
app.post('/api/options', async function(req,res){
    try{
        const options=await new option(req.body)
        await options.save()
        res.json({
            options,
            message :"Records Posted"
        })
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})

//update into options
app.put('/api/options/:id', async function(req,res){
    try{
        const options=await option.updateOne({"option_id":req.params.id},req.body)
        if(options.nModified==1)
        {
            res.json({
                options,
                message :"Records Updated"
            })
        }
        else{
            res.json({
                message: "No option is available"
            })
        }
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})


//delete options
app.delete('/api/options/:id', async function(req,res){
    try{
        const options=await option.findOneAndDelete({"option_id":req.params.id})
        if(options)
        {
            res.json({
                options,
                message :"Record Deleted"
            })
        }
        else{
            res.json({
                message: "No option is available"
            })
        }
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})


//find all data from answer
app.get('/api/answers', async function(req,res){
    try{
        const answers=await answer.find()
        res.json({
            answers,
            message :"Records Found"
        })
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})

//find particular answers
app.get('/api/answers/:id', async function(req,res){
    try{
        const answers=await answer.findOne({answer_id:req.params.id})
        if(answers)
        {
            res.json({
                answers,
                message :"Records Found"
            })
        }
        else{
            res.json({
                message: "No answer is available for specified id"
            })
        }
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})

//insert into answers
app.post('/api/answers', async function(req,res){
    try{
        const answers=await new answer(req.body)
        await answers.save()
        res.json({
            answers,
            message :"Records Posted"
        })
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})

//update into answers
app.put('/api/answers/:id', async function(req,res){
    try{
        const answers=await answer.updateOne({"answer_id":req.params.id},req.body)
        if(answers.nModified==1)
        {
            res.json({
                answers,
                message :"Records Updated"
            })
        }
        else{
            res.json({
                message: "No answer is available"
            })
        }
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})


//delete answers
app.delete('/api/answers/:id', async function(req,res){
    try{
        const answers=await answer.findOneAndDelete({"answer_id":req.params.id})
        if(answers)
        {
            res.json({
                answers,
                message :"Record Deleted"
            })
        }
        else{
            res.json({
                message: "No answer is available"
            })
        }
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        res.end()
    }     
})

app.listen(5000,()=>console.log("Server running"))
