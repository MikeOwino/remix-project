// security checks
import * as fs from 'fs';

class SecurityAgent {
  private codebase: string[]; // list of code base file
  public currentFile: string;

  constructor(codebasePath: string) {
    // git or fs
    this.codebase = this.loadCodebase(codebasePath);
  }

  private loadCodebase(path: string): string[] {
    const files = fs.readdirSync(path);
    return files
      .filter(file => file.endsWith('.ts'))
      .flatMap(file => fs.readFileSync(`${path}/${file}`, 'utf-8').split('\n'));
  }

  public update(currentFile, lineNumber){

  }

  public getRecommendations(currentLine: string, numSuggestions: number = 3): string[] {
    // process the code base highlighting security vunerabilities and deliver recommendations
    const suggestions: string[] = [];
    return suggestions;
  }
}