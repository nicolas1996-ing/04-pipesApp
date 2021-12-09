import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: "mayusculas"
})

export class MayusculasPipe implements PipeTransform {

    // retorno del pipe 
    transform(valor: string, enMayuscula: boolean = true): string {
        console.log(valor); // valor = nosotros

        return enMayuscula === true ? valor.toUpperCase() : valor.toLowerCase();
    }
}