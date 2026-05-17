import fs from 'fs';
import { jsonFilePath } from '../config.js';

export class JsonUtil {
    static readJsonFile(key?: string): any {
        const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
        if(key===undefined){
            return data;
        }
        return data[key];
}

  
}