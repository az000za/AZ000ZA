class OPTIMUS { // This Assumes One User Account
    /** 
     * 
     *  CODE THIS WITH PURE OOP
     * 
     * // OPTIMUS NAVIGATE the system
     * 
     * // ULTIMATE GOAL IS TO GET THE BEST SLEEP
     * 
     * Optimus Ask's what is your goal and navigates the system for you.
     * 
     * It's a master of time.
     * 
     * The system is everything.
     * 
     * The physical world and computers.
     * 
     * Currently written for humans, not other organism's
     */
    // manager = class Manager {

    // }
    constructor(){
        // this.db = 
    }
    organism = "Human";
    compass = class Compass {
        goal = "";
        steps = [];
    }
    energy = {};
    chi = class CHI {   // CHI logistics for humans
        wheel = {};
        senses = {
            // basic senses
            Ophthalmoception: [],   //(Eyes) Sight or visual perception
            Audioception: [],       //(Ears) Hearing or auditory sensations
            Gustaoception: [],      //(Tongue) Sense of taste
            Olfacoception: [],      // or Olfacception (Nose) Sense of smell
            Tactioception: [],      //(Skin)
            // internal senses
            Thermoception:[],       // (Skin) Lack or increase of heat (temperature)
            Proprioception:[],      //(Body Parts) Awareness of body parts without visual input
            Nociception: [],        // (Whole Body) Sensation of pain in the body (skin, body organs, etc.)
            Equilibrioception: [],  // (Whole Body) Sense of balance (determined by ear fluid)
            // Additional Human Senses
            Kinesthetic: [],        // Sense (Whole Body) Sense of acceleration
            Tactility: [],          // (Mostly the Skin) Perception of pressure
            Chemoreception: [],     // (Blood and Brain) Sensation of hunger, thirst, vomiting and suffocation
            StretchReception: [],   // (Muscles, Joint and Skin) Sense of gag reflex, gas distension, excretion, etc.
            CutaneousReception: [], // (Skin) Sense of skin vasodilation (like flushed skin)
            Synaesthesia: [],       // (Body Parts) Combination of senses (like smiling at someone’s voice)
            // EXTRA SENSORY
            SixthSense: [],         // (Small Brain) Sense of intuition (gut feeling)
            Premonition: [],        // (Paranormal) Subconscious sense of future events (usually danger)
            Telepathy: [],          // (Paranormal) Auditory perception of a person’s (near or far) thoughts
            Precognition: [],       // (Paranormal) Visual perception of future events
            Clairvoyance: [],       // (Paranormal) Visual perception of invisible objects or events
            Clairaudience: [],      // (Paranormal) Auditory perception of the invisible
        }        
        stimuli(){}
        deprive(){}
    }
    schedule = class Schedule {
        pattern = { // preferences
            wakeup: "",             // time to wake up
            bedtime: "",            // time to sleep

            breakfast: "",          // time to eat breakfast
            lunch: "",              // time to eat lunch
            dinner: "",             // time to eat dinner

            exercise: "",           // time to physically exercise

            workstart: "",          // time to start work
            workbreak: "",          // time to take a break
            workend: "",            // time to end work.
        };
        data = {
            events: [{
                now: "",            // time for event to happen
                event: "",          // name of the event
                description: "",    // a descripton of the event
                location: "",       // location the event occurs at
                action: "",         // do what action
            }],
            light: [
                {
                    name: "sunlight",
                    start: "",
                    stop: "",
                    intensity: "",
                }
            ],
            sound: [
                {
                    name: "",
                    start: "",
                    stop: "",
                    intensity: "",
                }
            ],
            temperature: [
                {
                    temp: "",
                    start: "",
                    stop: "",
                    intensity: "",
                }
            ],
        }
    }
    products = class Product {
        // A product can be made of products

        // The product is basically everything in the universe.
        // The product can be any resource.
        // Yes Even humans accept it we're made of things.
        // The product can be a website.
        // The product can be a thing on a website.
        // The product can be a thing on any any software.
        // The point is Optimus Navigates Everything.

        _id;            // optimus database id
        name;           // name of product
        link;           // internet link
        address;        // physical address like street address
        ipaddress;      // computer ip address
        coordinates;    // geo coordinates
        service;        // the services provided
        products;       // the products it serves
        price;          // the cost of item
        forSale;        // is the product for sale?
        rawdata;        // rawdata to be processed into properties
    }
    notifications = new mongoose.Schema({
        message: {
          type: String,
          required: true,
        },
        readit: {
          type: Boolean,
          default: false,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
        organization_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        ppl_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        // Add any other fields specific to Notifications
    });
    convohistmessage = new mongoose.Schema({
        sender: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
        // Reference to the message it's replying to
        replyTo: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'ConvoHistMessage',
        },
        organization_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        ppl_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
    });
    convohist = new mongoose.Schema({
        participants: {
          type: [String],
          required: true,
        },
        messages: [ConvoHistMessageSchema],
        organization_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        ppl_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        // Add any other fields specific to Convo Hist
    });
    worker = new mongoose.Schema({
        name: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          enum: ['person', 'robot'],
          required: true,
        },
        skillset: {
          type: String,
          required: true,
        },
        currentTask: {
          type: String,
          required: true,
        },
        organization_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        ppl_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        // Add any other fields specific to Workers
    });
    files = new mongoose.Schema({
        filename: {
          type: String,
          required: true,
        },
        fileType: {
          type: String,
          required: true,
        },
        size: {
          type: Number,
          required: true,
        },
        organization_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        ppl_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        // Add any other fields specific to Files
    });
    workflow = new mongoose.Schema({
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        organization_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        ppl_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        // Add any other fields specific to WorkFlows
    });
    assistant = new mongoose.Schema({
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        instructions: {
          type: String,
          required: true,
        },
        jscode: {
          type: String,
          required: true,
        },
        preprompt: {
          type: String,
          required: true,
        },
        'config-automata': {
          type: String,
          required: true,
        },
        type: {
          type: String,
          enum: ['common', 'niche', 'generated', 'recommended'],
          required: true,
        },
        organization_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        ppl_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        // Add any other fields specific to Assistants
    });
    ppl = new mongoose.Schema({
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        bcryptedPassword: {
          type: String,
          required: true,
        },
        loggedIn: {
          type: Boolean,
          default: false,
        },
        admin: {
          type: Boolean,
          default: false,
        },
        organizationName: {
          type: String,
          required: true,
        },
        // Add any other fields specific to PPL (People)
    });
    essentials = class Essentials {
        list = [
            "air",
            "food",
            "water",
            "electricity",
            "shelter",
            "transportation",
            "social",
            "education",
            "assistant",
            "job",
        ];
    }
    ai = class AI {

    }
    actions = class Actions {
        plan(){};
        plot(){};
        execute(){};
        promptAI(){};
        site(){}
    }
}



// new Product ({
//      name: "www.<somesite>.com"
//      link: "www.<somesite.com"
//      ipaddress: "",
//      location: "",
//      rawdata: "site data goes here"
// })

// new Product  ({
//     name: "$1 bill serial # .... 2017",
//     location: "on person"
// })

// new Product ({
//     name: "CraigsList",
//     service: "Product Posting",
// })

// new Product ({
//     name: "Postmates",
//     service: "Transporation",
// })

// new Product ({
//     name: "WalMart",
//     products: [
//         new Product({
//             name: "green apple",
//         })
//     ]
// })

// new Product ({
//     target: "Target",
//     products: [
//         new Product({
//             name: "milk - gradeA - "
//         })
//     ]
// })

// new Product ({
//     name: "McDonalds"
// });

// new Product ({
//     name: "Burger King"
// });

// new Product ({
//     name: "Wendy's"
// });