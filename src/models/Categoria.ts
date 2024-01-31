import Postagem from "./Postagem";

export default interface Categoria {
    id: number;
    descricao: string;
    postagem?: Postagem | null;
}