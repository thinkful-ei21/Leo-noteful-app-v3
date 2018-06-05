'use strict';

const express = require('express');
const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');
const Note = require('../models/note');
const router = express.Router();

/* ========== GET/READ ALL ITEM ========== */
router.get('/', (req, res, next) => {
  Note
    .find()
    .then(notes => {
      res.json({
        notes
        // notes: notes.map(
        //   (note) => note.serialize())
      });
    })
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
      });
  // console.log('Get All Notes');
  // res.json([
  //   { id: 1, title: 'Temp 1' },
  //   { id: 2, title: 'Temp 2' },
  //   { id: 3, title: 'Temp 3' }
  // ]);

});

/* ========== GET/READ A SINGLE ITEM ========== */
router.get('/:id', (req, res, next) => {

  Note
    .findById(req.params.id)
    .then(notes =>res.json(notes))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });

  // console.log('Get a Note');
  // res.json({ id: 1, title: 'Temp 1' });

});

/* ========== POST/CREATE AN ITEM ========== */
router.post('/', (req, res, next) => {

  Note
    .create({
      title: req.body.title,
      content: req.body.content})
    .then(
      note => res.status(201).json(note))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });

// console.log();
  // res.location('path/to/new/document').status(201).json({ id: 2, title: 'Temp 2' });

});

/* ========== PUT/UPDATE A SINGLE ITEM ========== */
router.put('/:id', (req, res, next) => {
  const toUpdate = {};
  const updateableFields = ['title', 'content'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });

  Note
    .findByIdAndUpdate(req.params.id, {$set: toUpdate})
    .then(
      note => res.status(204).json(note))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });

  // console.log('Update a Note');
  // res.json({ id: 1, title: 'Updated Temp 1' });

});

/* ========== DELETE/REMOVE A SINGLE ITEM ========== */
router.delete('/:id', (req, res, next) => {
  Note
    .findByIdAndRemove(req.params.id)
    .then(
      () => res.status(204).end())
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });

  // console.log('Delete a Note');
  // res.status(204).end();
});

module.exports = router;