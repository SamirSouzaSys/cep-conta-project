export type PropsConta = {
    id: number,
    nome:string;
    descricao:string;
    onDeleteItemClick: (id:number) => void;
}