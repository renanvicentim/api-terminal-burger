import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

export default (req, res, next) => {
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).json({ error: 'Token Not Found' })
  }

  const token = authToken.split(' ')[1]

  try {
    jwt.verify(token, authConfig.secret, function (err, decoded) {
      if (err) {
        throw new Error()
      }

      req.userId = decoded.id
      req.userName = decoded.name
      return next()
    })
  } catch (err) {
    return res.status(401).json({ error: 'Token is invalid' })
  }
}
