import prisma from "../config/db.ts";
import { Response } from "express";
import { AuthenticatedRequest } from "../utils/authenticatedRequest.ts";

export const addProperty = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const {
      owner_name,
      looking_to,
      locality,
      owner_mobile_number,
      property_type,
      built_up_area,
      furnished_type,
      cost,
      construction_status
    } = req.body;

    if (
      [
        owner_name,
        looking_to,
        locality,
        owner_mobile_number,
        property_type,
        built_up_area,
        furnished_type,
        cost,
        construction_status
      ].some((field) => field.trim == "")
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide the required details"
      });
    }

    let newProperty = await prisma.residentialProperty.create({
      data: {
        owner_name,
        looking_to,
        locality,
        owner_mobile_number: Number(owner_mobile_number),
        property_type,
        built_up_area: Number(built_up_area),
        furnished_type,
        agentId: req.user?.id,
        cost,
        construction_status
      }
    });

    return res.status(200).json({
      success: true,
      data: newProperty
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error", error);
      return res.status(500).json({
        success: false,
        message: error?.message
      });
    }
  }
};
