module.exports = function(mongoose) {
    const ContentSchema = new mongoose.Schema({
        content_type: {
            enum: [
                "file",
                "channel", 
                "conversation", 
                "message",
                "notification",
                "task",
            ]
        },
        ///////////////////
        //  BODY
        ///////////////////
        topic: { // the ai or person generates the topic.   // the file name, channel_name, conversation_name, message_name
            type: String,
            required: true,
        },
        data: {                                             // the file data, channel description, conversation_description, message_body
            type: String,
            required: true,
        },
        ///////////////////
        // LINKED TO NODES   ... CONTEXT
        ///////////////////
        id_rootContent: {                                   // the channel node
            type: mongoose.Schema.Types.ObjectId,
            required: true,            
        },
        id_parentContent: {                                 // a channel node, conversation, or message node
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        ///////////////////
        // ACCOUNT OWNERSHIP
        ///////////////////
        id_Account: {                                       
            type: mongoose.Schema.Types.ObjectId,           // owner person id ai or person or person who sent it.
            required: true,
        },
        //////////////////////
        // read by
        //////////////////////
        // read_by: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,       // owner person id ai or person
        //         required: true,
        //     },
        // ],
        //////////////////////
        // TIMESTAMP
        //////////////////////
        timestamp: {                                        // when the content was created
            type: Date,
            required: true,
            default: Date.now,
        },
    });
    const File = mongoose.model('Content', MessageSchema)
    return File;
}