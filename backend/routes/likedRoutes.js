// const express = require("express");
// const router = express.Router();
// const Liked = require("../models/Liked");

// // STEP 1: GET LIKE COUNT FOR A PLANT / POST
// router.get("/count/:postId", async (req, res) => {
//   try {
//     const count = await Liked.countDocuments({ post: req.params.postId });
//     res.json({ count });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // LIKE A POST
// router.post("/", async (req, res) => {
//   try {
//     const { user, post } = req.body;

//     // already liked check
//     const alreadyLiked = await Liked.findOne({ user, post });
//     if (alreadyLiked) {
//       return res.status(400).json({ message: "Post already liked" });
//     }

//     const likedPost = new Liked({ user, post });
//     await likedPost.save();

//     res.status(201).json(likedPost);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET LIKED POSTS OF A USER
// router.get("/:userId", async (req, res) => {
//   try {
//     const likedPosts = await Liked.find({ user: req.params.userId })
//       .populate("post");

//     res.json(likedPosts);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;




// const express = require('express');
// const router = express.Router();
// const Liked = require('../models/Liked');

// // 1. Post Like/Unlike karne ke liye
// router.post('/toggle', async (req, res) => {
//     const { userId, postId } = req.body;
//     try {
//         const existingLike = await Liked.findOne({ user: userId, post: postId });
//         if (existingLike) {
//             await Liked.findByIdAndDelete(existingLike._id);
//             return res.json({ liked: false, message: "Unliked" });
//         } else {
//             const newLike = new Liked({ user: userId, post: postId });
//             await newLike.save();
//             return res.json({ liked: true, message: "Liked" });
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // 2. Profile page ke liye saari liked posts fetch karna
// router.get('/user/:userId', async (req, res) => {
//     try {
//         const likes = await Liked.find({ user: req.params.userId }).populate('post');
//         res.json(likes);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;




const express = require('express');
const router = express.Router();
const Liked = require('../models/Liked');

// 1. Post Like/Unlike karne ke liye
router.post('/toggle', async (req, res) => {
    const { userId, postId } = req.body;
    try {
        const existingLike = await Liked.findOne({ user: userId, post: postId });
        if (existingLike) {
            await Liked.findByIdAndDelete(existingLike._id);
            return res.json({ liked: false, message: "Unliked" });
        } else {
            const newLike = new Liked({ user: userId, post: postId });
            await newLike.save();
            return res.json({ liked: true, message: "Liked" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// 2. Profile page ke liye saari liked posts fetch karna
router.get('/user/:userId', async (req, res) => {
    try {
        const likes = await Liked.find({ user: req.params.userId }).populate('post');
        res.json(likes);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;