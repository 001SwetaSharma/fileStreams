import express from 'express';
import fileController from '../controller/FilesController.js';
import streamController from '../controller/StreamsController.js'

const router = express.Router();

router.get('/readFileData', fileController.readFileData);
router.post('/writeFileData', fileController.writeFileData);
router.get('/writeReadFileData', fileController.writeReadFileData);

router.get('/readStreamData', streamController.readStreamData);
router.post('/writeStreamData', streamController.writeStreamData);
router.post('/readWriteStreamData', streamController.readWriteStreamData);
export default router;