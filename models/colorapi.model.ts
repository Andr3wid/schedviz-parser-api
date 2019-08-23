export enum ColorSchemeMode {
    monochrome = "monochrome",
    monochrome_dark = "monochrome-dark",
    monochrome_light ="monochrome-light",
    analogic = "analogic",
    complement = "complement",
    analogic_complement = "analogic-complete",
    triad = "triad",
    quad = "quad"
}

export class ColorApiModel {
    mode: string;
    count: string;
    colors: object[];
}