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
  export class top {
    command: string;
    cpu: string;
    mem: string;
    ni: string;
    pid: string;
    pr: string;
    res: string;
    s: string;
    shr: string;
    time: string;
    user: string;
    virt: string;
}