import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
  try {

    const token = req.cookies?.token

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No token provided"
      })
    }

    // Note: if token is invalid it will return error
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    )

    req.userId = decoded.id

    next()

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - Invalid token or expire token",
    });
  }
}

export default verifyToken