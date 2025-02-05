import { Request } from "express";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
  files?: {
    avatar?: Express.Multer.File[];
  };
}
