const Cliente = require('../../models/cliente')

describe("Clientes", () => {
    beforeEach(() => {})

    test('valida propriedades de um cliente', () => {
        const cliente = Cliente.primeiro()

        expect(cliente.id).not.toBeUndefined()
        expect(cliente.nome).not.toBeUndefined()
        expect(cliente.telefone).not.toBeUndefined()
    })


    test("retorna todos os clientes", () => {
        const clientes = Cliente.todos()
        
        expect(clientes.length).toEqual(10)
    })


    test('Nome do cliente upercase', () => {
        const cliente = Cliente.primeiro()
        cliente.nome = 'jackson'

        expect(cliente.nome.toUpperCase()).toEqual('JACKSON')
    })
})