import type { Request, Response } from "express"
import { prisma } from "../lib/prisma";

export const testEndpoint = async (req: Request, res: Response) => {
    try {
        const urls = await prisma.urls.count();

        return res.status(200).json({
            message: `API is working! Total URLs: ${urls}`,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
};


export const createUrlShort = async (req: Request, res: Response) => {
    
}