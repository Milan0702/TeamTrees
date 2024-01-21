const express = require("express");
const mg = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
var nm =require("nodemailer")
// const { default: Leaderboard } = require("./ecf2/src/components/Leaderboard");
const app = express();

app.use(cors());
app.use(bodyParser.json());
mg.connect("mongodb://127.0.0.1:27017/TeamTrees").then(() => {
    console.log("Connection Success");
});

const UserSchema = new mg.Schema({ 
    amount: Number,
    name: String,
    email: String,
    phone: Number,
    message: String,
    updates: Boolean,
    anonymous: Boolean,
    
});
const User = new mg.model("Donor_Details", UserSchema);

app.post("/donateAmount", async (req, res) => {
    try {
        const { amount, Fname, Femail, Fphone, Fmsg, check1, check2 } = req.body;

        console.log(amount, Fname, Femail, Fphone, Fmsg, check1, check2 )

        const newUser = new User({ amount:amount, name:Fname, email:Femail, phone:Fphone, message:Fmsg, updates:check1, anonymous:check2 });
        await newUser.save();

        const alldata = await User.find({})
        res.json(alldata)
        // console.log(newUser) 
        // res.send();
        var trans=nm.createTransport({
            host:"smtp.gmail.com",
            port:465,
            auth:{
                user:'milanbhimani0001@gmail.com',
                pass:'jrqkrfgqjgypjtjw'
            }
        })
        var mailoption={
            from:"me",
            to:Femail,
            Subject:"TEAM TREES",
            attachments:[{
                filename:"certificate.pdf",
                path:__dirname+"/ecf2/src/assets/certificate.pdf",
                cid:"abc_id"
            }],
            text:"Thankyou for your contribution towards a great cause!! Here's Your Certificate. Yayy!"
        //    html:""
        };
        
        trans.sendMail(mailoption,(err,info)=>{
            if(err){
                console.error(err);
            }
            console.log(info)
        });
    } catch (error) {
        res.send(error);
    }
});

app.get("/fetchDonors", async (req,res)=>{
    try {
        const ans = await User.find({},{name:1,_id:0}).sort({amount:1})
        console.log(ans)
        res.send();

    } catch (error) {
        res.send(error);
    }
})
app.get('/leaderboard', (req, res) => {
    // Query the database for all donations
    User.find({},{_id:0,name:1,amount:1,message:1} ,(err, donations) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(200).json(donations);
      }
    }).sort({amount:1});
  });
// app.get('/leaderboard', async (req, res) => {
//     try {
//       const donations = await User.find({},{_id:0,name:1,amount:1,message:1});
//       res.json(donations);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Error fetching donations');
//     }
//   });
  
  app.listen(5000)
// app.get("/leaderboard",(req,res)=>{
//     User.find((err,data) => {
//         if(err){res.status(500).send(err)}
//         else{res.status(200).send(data)}
//     })
// })
// app.listen(5000);
