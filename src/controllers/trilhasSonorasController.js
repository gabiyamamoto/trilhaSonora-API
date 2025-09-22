import dados from "../models/dados.js";
const { trilhasSonoras } = dados;

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
        obras: resultado,
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

export { getAllTrilhas, getTrilhaByld };