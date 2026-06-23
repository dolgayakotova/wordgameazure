import { Term } from "../models/Term";

export function searchTerms(terms: Term[], query: string): Term[] {
    const q = query.toLowerCase();

    return terms.filter(term => {
        return (
            term.term.toLowerCase().includes(q) ||
            term.definition.toLowerCase().includes(q) ||
            term.category.toLowerCase().includes(q) ||
            term.keywords.some(k => k.toLowerCase().includes(q))
        );
    });
}
