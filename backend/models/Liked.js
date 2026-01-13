// const mongoose = require("mongoose");

// const likedSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true
//     },
//     post: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Post",
//       required: true
//     }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Liked", likedSchema);





// const mongoose = require("mongoose");

// const likedSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true
//     },
//     post: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Plant",   // ya "Post" (jo tum use kar rahi ho)
//       required: true
//     }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Liked", likedSchema);



// const mongoose = require('mongoose');

// const LikedSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User', // User model se link
//         required: true
//     },
//     post: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Post', // Post model se link
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = mongoose.model('Liked', LikedSchema);


const mongoose = require('mongoose');

const LikedSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // User model se link
        required: true
    },
    post: {
        type: String,
        ref: 'Post', // Post model se link
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Liked', LikedSchema);