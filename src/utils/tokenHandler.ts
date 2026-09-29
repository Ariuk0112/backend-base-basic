import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
dotenv.config();

export interface AuthRequest extends Request {
  user: {
    userId: string;
  };
}

export const generateToken = (userId: string) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string);
  return token;
};

export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token baihgui baina",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Huchingui token baina",
      });
    }
    req.user = {
      userId: (decoded as { userId: string }).userId,
    };
    next();
  });
};
