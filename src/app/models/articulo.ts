export interface Articulo {
    IdArticulo: number;
    Nombre: string;
    Precio: number;
    CodigoDeBarra: string;
    IdArticuloFamilia: number;
    Stock: number;
    FechaAlta: string;
    Activo: boolean;
  };
  export const Articulos: Articulo[] = [{
    IdArticulo: 108,
    Nombre: "Adaptador usb wifi tl-wn722n",
    Precio: 219.0,
    CodigoDeBarra: "0693536405046",
    IdArticuloFamilia: 9,
    Stock: 898,
    FechaAlta: "2017-01-23T00:00:00",
    Activo: false
  },
  {
    IdArticulo: 139,
    Nombre: "Aire acondicionado daewoo 3200fc dwt23200fc",
    Precio: 5899.0,
    CodigoDeBarra: "0779816944014",
    IdArticuloFamilia: 7,
    Stock: 668,
    FechaAlta: "2017-01-04T00:00:00",
    Activo: true
  }
];

