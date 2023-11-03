const mongoose = require('mongoose');

const chatModel = mongoose.Schema({
    chatName:{type : 'string',trim:true},
    isGroupChat :{type : boolean, default: false},
    user :[{
        type:mongooseSchema.Types.ObjectID,
        ref: "User",
    },],
    latestMessage:{type:mongoose.Schema.Types.ObjectId,
    ref: "Message",
    },
    groupAdmin: {type:mongoose.Schema.Types.ObjectId, ref:"User",}
}
    ,{timestams:true,}
);



const Chat = mongoose.model("Chat",chatModel);
module.exports = Chat;