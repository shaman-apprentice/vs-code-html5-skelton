import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "helloworld-sample" is now active!'
  );

  let disposable = vscode.commands.registerCommand('html5-skelton', () => {
    vscode.window.showInformationMessage('Hello World!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
