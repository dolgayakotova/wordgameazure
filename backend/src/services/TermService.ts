import data from "../data/terms.json";
import { Term } from "../models/Term";
import { searchTerms } from "../utils/search";

export class TermService {
    private readonly terms = data as Term[];

    getAll() {
        return this.terms;
    }

    search(query: string) {
        return searchTerms(this.terms, query);
    }

    byExam(exam: string) {
        return this.terms.filter(t => t.exam === exam);
    }

    byDifficulty(level: number) {
        return this.terms.filter(t => t.difficulty === level);
    }
}
