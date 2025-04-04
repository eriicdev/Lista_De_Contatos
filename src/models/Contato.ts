class Contato {
    id: number
    titulo: string
    favorito: boolean
    numero: string
    email: string

    constructor(
        id: number,
        titulo: string, 
        favorito: boolean = false, 
        numero: string, 
        email: string, 
    ) {
        this.id = id
        this.titulo = titulo
        this.favorito = favorito
        this.numero = numero
        this.email = email
    }
}

export default Contato