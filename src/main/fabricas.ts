import { Contorlador } from "../presentation/controllers/controller";

import { Repositorio } from '../repositories/repositorio'

import { UseCase } from '../domain/usecases/usecase'

import { NotaFiscal } from '../domain/entities/nota-fiscal'

function Fabrica_De_Controladores() {

    console.log('fabrica')
    const repositorio = new Repositorio<NotaFiscal>();
    const usecase = new UseCase(repositorio);
    const controlador = new Contorlador(usecase);
    return controlador;
}

export { Fabrica_De_Controladores };