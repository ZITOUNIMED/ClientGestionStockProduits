
export class DataModel {
  constructor(public columnName?: string,
              public columnReference?: string,
              public dataType?: string,
              public readonly?: boolean,
              public messages?: any){}
}
