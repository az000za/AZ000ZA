module.exports = function(mongoose) {
    const AssistantSchema = new mongoose.Schema({
      /**
       * 
       *  An Assistant can be made of Assistants that create a workflow
       * 
       */
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        // github_link:{},

        // needs to reference content
        id_Content: { // jscode                             // front_end code that can connect to any api's ... eventually backend will be able to run.
            required: true,
            type: mongoose.Schema.Types.ObjectId,           // owner person id ai or person or person who sent it.
            ref: "Content",
        },
        category: {
          type: String,
          enum: ['common', 'niche', 'generated', 'recommended'],
          required: true,
        },
        id_Account: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        workflow: {
          // references how to pass information to each assistant.
        },
        skillset: {
          type: String,
          required: true,
        },
        currentTask: {
            type: String,
            required: true,
        },
        tasks: [
          {
            required: true,
            type: mongoose.Schema.Types.ObjectId,           // owner person id ai or person or person who sent it.
            ref: "Content",
          }
        ]
        // Add any other fields specific to Assistants
    });
    const Assistant = mongoose.model('Assistant', AssistantSchema)
    return Assistant;
}