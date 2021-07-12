const analysisInstatnce = require('../Model/Analytics')

exports.CreateanalysisRecord =  async function(req, res){
    try{
        const newanalysis = await analysisInstatnce.create(req.body);
        if(newanalysis!== null){
            res.status(200).json({err: 0})
        }
        else{
            res.status(400).json({err: 1})
        }

    }
    catch(err){
        console.log(err);
        res.status(500).json({err: 1 ,message:"Internal Server error"})
    }
    
}