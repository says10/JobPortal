// const multer = require("multer");
// const express = require("express");
// const { default: mongoose } = require("mongoose");
// const ApplicantSchema = mongoose.model("JobApplicantInfo");
// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix + ".pdf");
//   },
// });

// const upload = multer({ storage: storage });

// router.post("/resume", upload.single("resume"), async (req, res) => {
//   const fileName = req.file.filename;
//   const id = req.body.userId;

//   try {
//     const applicant = await ApplicantSchema.findOne({
//       userId: id,
//     });
//     if (!applicant) {
//       return res.status(404).json({
//         message: "User does not exist",
//       });
//     }
//     if (fileName) {
//       applicant.resume = fileName;
//     }

//     await applicant.save();
//     console.log(fileName);
//     console.log(newFile);

//     res.send({ status: "upload oke" });
//   } catch (error) {
//     res.json({ status: error });
//   }

//   console.log(storage);
// });

// module.exports = router;
const multer = require("multer");
const express = require("express");
const mongoose = require("mongoose"); // Use regular require instead of destructuring default
const router = express.Router();

// Ensure the ApplicantSchema is properly defined elsewhere and imported
const ApplicantSchema = mongoose.model("JobApplicantInfo");

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files"); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".pdf");
  },
});

// File filter to accept only PDFs
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit to 5MB
});

router.post("/resume", upload.single("resume"), async (req, res) => {
  try {
    // Log incoming request data for debugging
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    const fileName = req.file?.filename; // Use optional chaining to avoid errors if no file
    const id = req.body.userId;

    if (!id) {
      return res.status(400).json({ message: "userId is required" });
    }

    if (!fileName) {
      return res.status(400).json({ message: "No resume file uploaded" });
    }

    const applicant = await ApplicantSchema.findOne({ userId: id });
    if (!applicant) {
      return res.status(404).json({ message: "User does not exist" });
    }

    applicant.resume = fileName;
    await applicant.save();

    console.log("Saved Filename:", fileName);
    res.status(200).json({ status: "upload ok", fileName });
  } catch (error) {
    console.error("Error in upload route:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

module.exports = router;
