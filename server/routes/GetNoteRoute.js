const NoteModel=require('../model/NoteModel');
const VacancyModel=require('../model/VacancyModel');

module.exports=NoteRoute=async (req,res)=>{
    let notes=[];
    let vacancies=[];
    await NoteModel.find({}).then(response=>{
        notes=[...response]
    }).catch(error=>console.log(error));
    await VacancyModel.find({}).then(response=>{
        vacancies=[...response]
    }).catch(error=>console.log(error))
    res.json({notes:notes,vacancies:vacancies})
}   