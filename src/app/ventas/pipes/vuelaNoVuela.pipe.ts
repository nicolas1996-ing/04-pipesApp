import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: "vuela"
})

export class VuelaNoVuelaPipe implements PipeTransform {

    transform(valor: boolean): string {
        return valor === true ? 'Vuela' : 'no vuela'
    }
}