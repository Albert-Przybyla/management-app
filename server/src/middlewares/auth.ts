// src/middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import userSchema, { UserDocument } from "../schemas/user.schema";
import { UserRole } from "../enums/userRole.enum";

interface JwtPayload {
  id: string;
  role: UserRole;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserDocument | null;
    }
  }
}

export const generateToken = (user: UserDocument) => {
  return jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    const user = await userSchema.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export const checkRoles = (roles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};

export const isUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== UserRole.User) {
    return res.status(403).json({ message: "Access denied. Users only." });
  }
  next();
};

export const isOwner = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== UserRole.Owner) {
    return res.status(403).json({ message: "Access denied. Owners only." });
  }
  next();
};

export const isManager = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== UserRole.Manager) {
    return res.status(403).json({ message: "Access denied. Managers only." });
  }
  next();
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== UserRole.Admin) {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};
