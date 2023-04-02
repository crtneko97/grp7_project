import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  // Here, you can write code to authenticate the user with your backend API.
  // For this example, we'll just return a success message if the email and password match "test" and "password".
  if (email === "simon_lol123@hotmail.com" && password === "123") {
    res.status(200).json({ message: "Login successful!" });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
}
