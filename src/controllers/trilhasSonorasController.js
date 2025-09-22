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

export { getAllTrilhas }