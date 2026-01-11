import type { Request, Response } from "express"
import { prisma } from "../lib/prisma";


export const createUrlShort = async (req: Request, res: Response) => {
    try {
        const { url } = req.body;

        if (!url || typeof url !== "string") return res.status(400).json({ error: "URL inválida" });

        const existingUrl = await prisma.urls.findFirst({
            where: { original: url },
        });

        if (existingUrl) {
            return res.status(200).json({ shortUrl: existingUrl.short });
        }

        const shortUrl = Math.random().toString(36).substring(2, 8);

        await prisma.urls.create({
            data: {
                original: url,
                short: shortUrl
            }
        });

        return res.status(201).json({ shortUrl });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
};


export const getUrls = async (req: Request, res: Response) => {
    try {
        const urls = await prisma.urls.findMany();

        return res.status(200).json(urls);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
};


export const redirectToUrl = async (req: Request, res: Response) => {
    try {
        const short = req.params.short;

        if (!short) {
            return res.status(400).json({ error: "Short inválido" });
        }

        const url = await prisma.urls.findFirst({
            where: { short },
        });

        if (!url) {
            return res.status(404).json({ error: "URL não encontrada" });
        }

        return res.redirect(url.original);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
};
