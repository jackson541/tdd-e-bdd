class Cliente {
    constructor(_id=0, _nome='', _telefone=''){
        this.id = _id
        this.nome = _nome
        this.telefone = _telefone
    }

    static todos(){
        return [
            new Cliente(1, 'jackson 1', '123456'),
            new Cliente(2, 'jackson 2', '223456'),
            new Cliente(3, 'jackson 3', '323456'),
            new Cliente(4, 'jackson 4', '423456'),
            new Cliente(5, 'jackson 5', '523456'),
            new Cliente(6, 'jackson 6', '623456'),
            new Cliente(7, 'jackson 7', '723456'),
            new Cliente(8, 'jackson 8', '823456'),
            new Cliente(9, 'jackson 9', '923456'),
            new Cliente(10, 'jackson 10', '1023456')
        ]
    }

    static primeiro() {
        return new Cliente(1, 'jackson 1', '123456')
    }

}


module.exports = Cliente
