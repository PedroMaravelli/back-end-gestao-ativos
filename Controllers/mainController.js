const db = require('../models');
const rede = require('../models/rede');

const mainController = {
    main: async (req,res) => {

    },
    hardware: async (req,res) => {
         try {
            const hardwares = await db.hardware.findAll();
            return res.status(200).json(hardwares);
        } catch (error) {
            console.error('Erro ao buscar hardwares:', error);
            return res.status(500).json({ erro: 'Erro interno ao buscar hardwares.' });
        }

    },
    software: async (req,res) => {
         try {
            const softwares = await db.software.findAll();
            return res.status(200).json(softwares);
        } catch (error) {
            console.error('Erro ao buscar softwares:', error);
            return res.status(500).json({ erro: 'Erro interno ao buscar softwares.' });
        }

    },
    rede: async (req,res) => {
         try {
            const redes = await db.rede.findAll();
            return res.status(200).json(redes);
        } catch (error) {
            console.error('Erro ao buscar redes:', error);
            return res.status(500).json({ erro: 'Erro interno ao buscar redes.' });
        }

    },
    cadastroHardware: async (req,res) => {
         try {
            const {
            numero_ativo,
            tipo,
            modelo,
            marca,
            processador,
            ram,
            armazenamento,
            data_aquisicao,
            fornecedor,
            localizacao,
            usuario_responsavel
            } = req.body;

            const novoHardware = await db.hardware.create({
            numero_ativo,
            tipo,
            modelo,
            marca,
            processador,
            ram,
            armazenamento,
            data_aquisicao,
            fornecedor,
            localizacao,
            usuario_responsavel
            });

            return res.status(201).json(novoHardware);
        } catch (error) {
            console.error('Erro ao criar hardware:', error);
            return res.status(500).json({ erro: 'Erro interno ao criar hardware.' });
        }

    },
    cadastroSoftware: async (req,res) => {
        try {
            const {
            nome,
            versao,
            fornecedor,
            codigo_licenca,
            data_aquisicao,
            data_expiracao,
            departamento
            } = req.body;

            const novoSoftware = await db.software.create({
            nome,
            versao,
            fornecedor,
            codigo_licenca,
            data_aquisicao,
            data_expiracao,
            departamento
            });

            return res.status(201).json(novoSoftware);
        } catch (error) {
            console.error('Erro ao criar software:', error);
            return res.status(500).json({ erro: 'Erro interno ao criar software.' });
        }

    },
    cadastroRede: async (req,res) => {
         try {
            const {
            tipo_equipamento,
            marca,
            modelo,
            numero_serie,
            endereco_ip,
            endereco_mac,
            localizacao,
            status,
            versao_firmware,
            responsavel
            } = req.body;

            const novaRede = await db.rede.create({
            tipo_equipamento,
            marca,
            modelo,
            numero_serie,
            endereco_ip,
            endereco_mac,
            localizacao,
            status,
            versao_firmware,
            responsavel
            });

            return res.status(201).json(novaRede);
        } catch (error) {
            console.error('Erro ao criar equipamento de rede:', error);
            return res.status(500).json({ erro: 'Erro interno ao criar equipamento de rede.' });
        }

    },
    deletarRede: async (req,res) => {
        try {
            const { id } = req.params;

            const rede = await db.rede.findByPk(id);

            if (!rede) {
            return res.status(404).json({ error: 'Rede não encontrada' });
            }

            await rede.destroy();
            res.json({ message: 'Rede deletada com sucesso' });
        } catch (error) {
            console.error('Erro ao deletar rede:', error);
            res.status(500).json({ error: 'Erro ao deletar rede' });
        }
    },
    deletarSoftware: async (req,res) => {
        try {
            const { id } = req.params;

            const Software = await db.software.findByPk(id);

            if (!Software) {
            return res.status(404).json({ error: 'software não encontrada' });
            }

            await Software.destroy();
            res.json({ message: 'software deletada com sucesso' });
        } catch (error) {
            console.error('Erro ao deletar software:', error);
            res.status(500).json({ error: 'Erro ao deletar software' });
        }
    },
    deletarHardware: async (req,res) => {
        try {
            const { id } = req.params;

            const hardware = await db.hardware.findByPk(id);

            if (!hardware) {
            return res.status(404).json({ error: 'hardware não encontrada' });
            }

            await hardware.destroy();
            res.json({ message: 'hardware deletada com sucesso' });
        } catch (error) {
            console.error('Erro ao deletar hardware:', error);
            res.status(500).json({ error: 'Erro ao deletar hardware' });
        }
    },
}

module.exports = mainController;  