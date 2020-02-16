import { Injectable } from '@angular/core';
import { Register } from '../models/registro.model';
import { Plugins } from "@capacitor/core";
const {Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  guardados: Register[] = [];
  key: string;

  constructor() {
    this.cargarStorage(this.key);
  }

  async cargarStorage(key: string): Promise<any>{
    const item = await Storage.get({key: key});
    console.log(item.value);
    return JSON.parse(item.value) || [];
  }

  async guardarRegistro(key: string, value: Register): Promise<void>{
    await this.cargarStorage(this.key);
      let reg: Register = value;
      this.guardados.unshift(reg);
      //console.log(this.guardados);
      console.log(value);
      await Storage.set({
        key: key,
        value: JSON.stringify(this.guardados)
      });
  }

  async removeStorage(key: string): Promise<void>{
    await Storage.remove({
            key: key
          })
  }


}
