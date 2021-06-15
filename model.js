const mongoose = require('mongoose')
const Schema=mongoose.Schema

//question schema
const question = new Schema({
        question: {type: String},
        question_id: {type: String}
    },
    {collection: 'questions'}
    )

//option schema
const option = new Schema({
    option: {type: String},
    option_id: {type: String}
},
{collection: 'options'}
)

//answer schema
const answer = new Schema({
    answer: {type: String},
    answer_id: {type: String}
},
{collection: 'answers'}
) 

//Model
const questions=mongoose.model('Questions',question)
const options=mongoose.model('Options',option)
const answers=mongoose.model('Answers',answer)

module.exports = {
    question: questions,
    option: options,
    answer: answers}