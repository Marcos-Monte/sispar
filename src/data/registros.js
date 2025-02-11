import iconArquivo from "@/assets/icons/arquivo.png";

const solicitacoesReembolso = [
    { 
        colab: 'Vitor Carvalho', 
        empresa: 'wss001', 
        prest: 329456, 
        data: '08/01/2025', 
        motivo: iconArquivo, 
        tipo: 'desp. de viagem', 
        ctrCusto: '1100110002 - fin', 
        ordInt: '003', 
        div: '002',
        pep: '001',
        moeda: 'brl',
        distKm: '434Km',
        valKm: 0.65,
        valFaturado: 242.10,
        despesa: 40.05
    },
    { 
        colab: 'Vanessa Porto', 
        empresa: 'wss002', 
        prest: 987789, 
        data: '01/01/2025', 
        motivo: iconArquivo, 
        tipo: 'desp. de viagem', 
        ctrCusto: '1100110002 - fin', 
        ordInt: '0002', 
        div: '005',
        pep: '001',
        moeda: 'ars',
        distKm: '289Km',
        valKm: 0.37,
        valFaturado: 106.93,
        despesa: 0.0
    },
    { 
        colab: 'Washington Kingsman', 
        empresa: 'wss003', 
        prest: 546791, 
        data: '03/01/2025', 
        motivo: iconArquivo, 
        tipo: 'evento de apresentação', 
        ctrCusto: '1100109002 - fin', 
        ordInt: '001', 
        div: '005',
        pep: '001',
        moeda: 'usd',
        distKm: '197Km',
        valKm: 0.75,
        valFaturado: 109.75,
        despesa: 29.97
    },
]

export default solicitacoesReembolso;