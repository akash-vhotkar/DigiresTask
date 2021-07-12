const UserInstance =  require('../Model/User');
const bcrypt  = require('bcrypt');
const jwt  = require('jsonwebtoken')
exports.login= async function(req,res){
    
    const { email, password } = req.body;
            try {
                const olduser = await UserInstance.findOne({ email: email });
                if (olduser) {
                    const validpass = await bcrypt.compare(password, olduser.password);
                    if (validpass) {
                        const token = await jwt.sign({ email: email }, "secret", { expiresIn: "1h" });
                        res.status(200).json({err:0, message: "Login successfull", data :{token ,result: olduser}})
                    }
                    else {
                        res.status(200).json({ err: 1, message: "please enter correct password" })
                    }
                }
                else {
                    res.status(200).json({ err: 1, message: "Please Register dont have account" })
                }
            }
            catch (err) {
                if (err) {
                    res.status(500).json({ err: 1, message: "Internal server error" })
                }
            }
}

exports.regisester = async function(req,res){
    
    console.log("register requst is fired")
    const {  password, email } = req.body;

    try {
        const olduser = await UserInstance.findOne({ email: email });
        if (olduser) {
            res.status(200).json({ err: 1, message: "Account already exist please login" });
        }
        else {
            const hashpassword = await bcrypt.hash(password, 12);
            const newuser = await UserInstance.create({ email: email,  password: hashpassword , name:req.body.name});
            const token = await jwt.sign({ email: email }, 'secret', { expiresIn: '1h' });
            res.status(200).json({ err: 0, message: "Registration successfull", data: { token, result: newuser } })
        }

    }
    catch (err) {
        console.log(err);
        if (err) res.status(500).json({ err: 1, message: "Internal server error" })
    }

}