module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Voce está na rota de atendimentos'));

    app.post('/atendimentos', (req, res) => {
        res.send("vc esta na rota de atendimentos e está realizando um POST");
    })
}