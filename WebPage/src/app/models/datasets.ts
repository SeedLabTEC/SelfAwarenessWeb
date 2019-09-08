import { Variable } from "@angular/compiler/src/render3/r3_ast";

export class memory {
    name: string;
    date;
    memoryValue: Number;
  }

  export class cpu {
    name: string;
    date;
    cpuValue: Number;
  }

  export class power {
    name: string;
    date: Date;
    powerValue: Number;
  }
