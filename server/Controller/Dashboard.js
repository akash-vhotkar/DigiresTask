const RecordInstance = require('../Model/Records');

exports.Createmedicalrecord= async function(req,res){
    try{
        const newrecord  = await RecordInstance.create(req.body);
        res.status(200).json({err: 0 ,message:"Done"})

    }catch(err){
        if(err) res.status(500).json({err: 1 , message:"Internal server error"}) 
    }
}
exports.getmedicalrecords= async function( req, res){
    try{
        const allrecords = await  RecordInstance.find({});
        res.status(200).json({err: 0, data: allrecords })

    }
    catch(err){
        if(err) res.status(500).json({err: 1 ,message:"Internal server error"});
    }
}