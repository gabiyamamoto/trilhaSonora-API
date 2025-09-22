import dados from "../models/dados.js";
const { trilhasSonoras } = dados;

const validarTrilha = (trilha) => {
    const duracaoCadaFaixa = parseInt(trilha.duracao)
    const duracaoTotal = trilha.faixas * duracaoCadaFaixa;

    if (duracaoTotal) {
      return "Duração total deve corresponder à soma das faixas individuais";
    }
    if (trilha.faixas < 0) {
      return "Número de faixas deve ser maior que 0";
    }
    return null;
  };

const getAllTrilhas = (req, res) => {
    const { midia, compositor, genero, plataforma } = req.query;
    let resultado = trilhasSonoras;

    if (midia) {
        resultado = resultado.filter((m) =>
            m.midia.toLocaleLowerCase().includes(midia.toLocaleLowerCase()));
    }

    if (compositor) {
        resultado = resultado.filter((c) =>
            c.compositor.toLocaleLowerCase().includes(compositor.toLocaleLowerCase()));
    }

    if (genero) {
        resultado = resultado.filter((g) =>
            g.genero.toLocaleLowerCase().includes(genero.toLocaleLowerCase()));
    }

    if (plataforma) {
        resultado = resultado.filter(p => p.plataforma.toLocaleLowerCase().includes(plataforma.toLocaleLowerCase()));
    }

    res.status(200).json({
        total: resultado.length,
        trilhas: resultado,
    });
};

const getTrilhaByld = (req, res) => {
    const id = parseInt(req.params.id);
    const trilha = trilhasSonoras.find(t => t.id === id);

    if (!trilha) {
        res.status(404).json({
            success: false,
            message: `Trilha sonora com o id ${id} não existe!`
        })
    }

    res.status(200).json({
        total: trilha.length,
        data: trilha
    })
};

const createTrilha = (req, res) => {
    const { titulo, compositor, midia, genero, faixas, duracao,anoLancamento, plataforma } = req.body;

    const novaTrilha = {
        id: trilhasSonoras.length + 1,
        titulo,
        compositor,
        midia,
        genero,
        faixas: parseInt(faixas),
        duracao,
        anoLancamento: parseInt(anoLancamento),
        plataforma
    }

    trilhasSonoras.push(novaTrilha);

    res.status(201).json({
        success: true,
        message: "Nova trilha cadastrada com sucesso!",
        data: novaTrilha
    });
};

const deleteTrilha = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(404).json({
            success: false,
            message: "O id deve ser válido!"
        });
    }

    const trilhaParaRemover = trilhasSonoras.find(t => t.id === id);

    if (!trilhaParaRemover) {
        return res.status(404).json({
            success: false,
            message: `Trilha com o id ${id} não existe!`
        });
    }

    const trilhasFiltradas = trilhasSonoras.filter(trilha => trilha.id !== id);

    trilhasSonoras.splice(0, trilhasSonoras.length, ...trilhasFiltradas);

    res.status(200).json({
        success: true,
        message: `A trilha com o id ${id} foi removida`
    });
};

export { getAllTrilhas, getTrilhaByld, createTrilha, deleteTrilha, updateTrilha };