import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    console.log("Received Token:", token);
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized! Login again.",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Ensure the user is an admin
    if (token_decode.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Forbidden: You are not an admin.",
      });
    }

    next();
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};

export default adminAuth;
