import { User } from '../../models/User';
import { jwt } from 'jsonwebtoken';

const YOUR_SECRET_KEY = process.env.SECRET_KEY;

exports.createToken = async function (req, res, next) {
  try {
    const user = await User.find(req.body);

    if (user.length) {
      const token = jwt.sign({
        user_id: user[0].user_id
      }, YOUR_SECRET_KEY, {
        expiresIn: '1h'
      });

      res.cookie('user', token);
      res.status(201).json({
        result: 'ok',
        token
      });
    } else {
      res.status(400).json({ error: 'invalid user' });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.createNewUser = async function (req, res, next) {
  try {
    const user = await new User(req.body).save();

    res.status(201).json({
      result: 'ok',
      user: user
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};