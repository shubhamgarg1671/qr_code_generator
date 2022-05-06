const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const {
    createQr,
    deleteQr,
    qrById,
    allQr,
    updateQr
} = require('../controllers/qrController.js');

router.route('/createQr').post(authenticate, createQr);
router.route('/deleteQr').post(authenticate, deleteQr);
router.route('/qrById').post(authenticate, qrById);
router.route('/allQr').post(authenticate, allQr);
router.route('/updateQr').post(authenticate, updateQr);

module.exports = router;