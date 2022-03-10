import * as vscode from 'vscode';

export const commandInput = async (defaults?:any) => {
    try { 
        const name = await vscode.window.showInputBox({prompt: 'Command Name', placeHolder: 'Command Name', value: defaults?.name||undefined}) as string;
        const cmd = await vscode.window.showInputBox({prompt: 'Add Command', placeHolder: 'Command',value: defaults?.cmd||undefined}) as string;
        if(!name.trim() || !cmd.trim())
        {throw new Error('Bad Input');}
        return Promise.resolve({name: name.trim(), cmd: cmd.trim()});
    }
    catch(err)
    {
        console.log('Error Adding Command');
        return Promise.reject(err);
    }
};

export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };


const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const generateString = (length: number): string => {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
