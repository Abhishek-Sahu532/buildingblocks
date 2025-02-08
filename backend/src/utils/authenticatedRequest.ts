import { Request } from "express";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    type: "agent" | "owner";
  };
  files?: {
    avatar?: Express.Multer.File[];
  };
}
