import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const jwtSecretKey = process.env.DIY_JWT_SECRET;
  const { username, password } = req.body;
  
  // confirm if password is valid
  if (password !== "password") {
    return res.status(401).json({ message: "Invalid password" });
  }

  let data = {
    signInTime: Date.now(),
    username,
  };

  const token = jwt.sign(data, jwtSecretKey);
  res.status(200).json({ message: "success", token });
}
