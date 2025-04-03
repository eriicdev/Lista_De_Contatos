class Contato {
    titulo: string
    favorito: boolean
    numero: string
    email: string
    id: number

    constructor(
        titulo: string, 
        favorito: boolean, 
        numero: string, 
        email: string, 
        id: number
    ) {
        this.titulo = titulo
        this.favorito = favorito
        this.numero = numero
        this.email = email
        this.id = id
    }
}

export default Contato