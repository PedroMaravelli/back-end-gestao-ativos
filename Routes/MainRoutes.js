const express = require('express');
const mainController = require('../Controllers/mainController');
const router = express.Router();


router.get('/', mainController.main);
router.get('/hardware', mainController.hardware);
router.get('/software', mainController.software);
router.get('/redes', mainController.rede);

router.post('/hardware', mainController.cadastroHardware);
router.post('/software', mainController.cadastroSoftware);
router.post('/rede', mainController.cadastroRede);

router.delete('/redes/:id', mainController.deletarRede);
router.delete('/software/:id', mainController.deletarSoftware);
router.delete('/hardware/:id', mainController.deletarHardware);








module.exports = router;