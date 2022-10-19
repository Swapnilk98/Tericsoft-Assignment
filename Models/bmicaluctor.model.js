const mongoose=require("mongoose")

const Schema=new mongoose.Schema({
    user_Id:{ type: String, required: true },
    weight:{ type: Number, required: true },
    height:{ type: Number, required: true },
    bmi:{ type: String, required: true },
})
const bmiModel=mongoose.model("bmi",Schema);
module.exports=bmiModel