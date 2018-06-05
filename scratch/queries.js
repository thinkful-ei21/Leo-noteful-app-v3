const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');

const Note = require('../models/note');

// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     const searchTerm = 'gaga';
//     let filter = {};

//     if (searchTerm) {
//       filter= {
//         $or:[    
//           {title : { $regex: searchTerm }},
//           {content: {$regex: searchTerm}}
//         ]
//       };
//     }

//   return Note.find(filter).sort({ updatedAt: 'desc' });
//   })    
//   .then(results => {
//     console.log(results);
//   })
//   .then(() => {
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   });


// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     const id = ('000000000000000000000003');
//     return Note.findById(id);
//   })
//   .then(results => {
//     console.log(results);
//   })
//   .then(() => {
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   });



// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     return Note.create({
//       title: '10 fun ways to cook cat',
//       content: 'frying, stewing, and more' 
//     });
//   })
//   .then(results => {
//     console.log(results);
//   })
//   .then(() => {
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   });

// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     const id ='5b16dcb4748422241c35e015';
//     return Note.findByIdAndUpdate(id,{
//       title: '3 fun ways to cook cat' 
//     });
//   })
//   .then(results => {
//     console.log(results);
//   })
//   .then(() => {
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   }); 

// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     const id ='5b16dcb4748422241c35e015';
//     return Note.findByIdAndRemove(id);
//   })
//   .then(results => {
//     console.log(results);
//   })
//   .then(() => {
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   }); 