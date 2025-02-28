import jwt from "jsonwebtoken";

// Auth Middleware
const authUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, login again!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id;
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default authUser;
