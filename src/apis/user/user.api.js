const User = require("./user.model");
const router = require('express').Router();

/** 
 * create user.
 */
router.route('/create').post(function (req, res) {
    const user = new User(req.body);
    user.logindate = new Date();

    user.save(function (err) {
        if (err) {
            return res.send(err);
        } else {
            res.send({ message: 'User Added' });
        }
    });
});


/**
 * retrieve a user 
*/
router.route('/retrieve/:id').get(function (req, res) {
    User.findOne({ _id: req.params.id }, function (err, user) {
        if (err) {
            return res.send(err);
        } else {
            res.json(user);
        }
    });
});


/** 
 * update a user 
 */
router.route('/update/:id').put(function (req, res) {
    User.findOne({ _id: req.params.id }, function (err, user) {
        if (err) {
            return res.send(err);
        }

        for (prop in req.body) {
            user[prop] = req.body[prop];
        }

        // save the user
        user.save(function (err) {
            if (err) {
                return res.send(err);
            }
            res.json({ message: 'User updated!' });
        });
    });
});

/** 
 * delete a user by id 
 */
router.route('/delete/:id').delete(function (req, res) {
    User.remove({
        _id: req.params.id
    }, function (err, movie) {
        if (err) {
            return res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    });
});

/** 
 * get all users 
*/
router.route('/users').get(function (req, res) {
    User.find(function (err, users) {
        if (err) {
            return res.send(err);
        } else {
            res.json(users);
        }
    });
});

module.exports = router;