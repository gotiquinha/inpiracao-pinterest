import 'react-hook-form';

declare module 'react-hook-form' {
  export interface RegisterOptions {
    required?: string | boolean;
    min?: number | { value: number; message: string };
    max?: number | { value: number; message: string };
    maxLength?: number | { value: number; message: string };
    minLength?: number | { value: number; message: string };
    pattern?: RegExp | { value: RegExp; message: string };
    validate?: (value: any) => boolean | string | Promise<boolean | string>;
  }
} 