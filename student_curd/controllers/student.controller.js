

const Student=require('../models/student.model');

exports.test=(req,res)=>{
    res.send('holle from the controller, you look good today')
}

exports.student_create=(req,res)=>
{
    let student=new Student(
        {
            name: req.body.name,
            grade: req.body.grade
        }
    );
    

    student.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Student Creation succeded')
    });
    
}



exports.student_details=(req,res)=>{

    Student.findById(req.params.id, function (err, student) {
        if (err) return next(err);
        res.send(student);
    })

}

exports.student_update=(req,res)=>{
    
    Student.findByIdAndUpdate(req.params.id, {$set: req.body},(err,student)=>{

        if(err)returnnext(err);
        res.send('the is Student updated')
    })
}

exports.student_delete=(req,res)=>{
    
    Student.findByIdAndRemove(req.params.id, (err)=> {
        if (err) return next(err);
        res.send('Student Deletion succeeded!');
    })

}
