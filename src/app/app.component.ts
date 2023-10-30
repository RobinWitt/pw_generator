import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordLength: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  generatedPassword: string = '';

  numbers: string = '1234567890';
  letters: string = 'abcdefghijklmnopqrstuvwxyz';
  symbols: string = '!@#$%^&*()';

  onChangeLength(event: Event): void {
    const target = event.target as HTMLInputElement;
    const parsedValue: number = parseInt(target.value);

    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    }
  }

  onChangeUseLetters(): void {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
  }

  onGeneratePassword(): void {
    let validChars: string = '';
    if (this.includeLetters) {
      validChars += this.letters;
    }
    if (this.includeNumbers) {
      validChars += this.numbers;
    }
    if (this.includeSymbols) {
      validChars += this.symbols;
    }

    let generatedPassword: string = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.generatedPassword = generatedPassword;
  }

  onResetPassword(): void {
    this.passwordLength = 0;
    this.includeLetters = false;
    this.includeNumbers = false;
    this.includeSymbols = false;
    this.generatedPassword = '';
  }
}
