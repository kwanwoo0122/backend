import { jwt } from 'jsonwebtoken';

const YOUR_SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  try {
    const clientToken = req.cookies.user;
    const decoded = jwt.verify(clientToken, YOUR_SECRET_KEY);

    if(decoded) {
      res.locals.userId = decoded.user_id;
      next();
    } else {
      res.status(401).json({error: 'unauthorized' });
    }
  } catch (err) {
    res.status(401).json({ error: 'token expired' });
  }
};

export { verifyToken };