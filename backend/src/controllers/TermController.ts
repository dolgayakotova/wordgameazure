import { Request, Response } from "express";
import { TermService } from "../services/TermService";

const service = new TermService();

export class TermController {
    static all(req: Request, res: Response) {
        res.json(service.getAll());
    }

    static search(req: Request, res: Response) {
        const q = req.query.q?.toString() ?? "";
        res.json(service.search(q));
    }

    static exam(req: Request, res: Response) {
        res.json(service.byExam(req.params.exam));
    }

    static difficulty(req: Request, res: Response) {
        res.json(service.byDifficulty(Number(req.params.level)));
    }
}
