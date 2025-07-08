// axios.d.ts
import { z } from 'zod';
import 'axios';

declare module 'axios' {
	interface AxiosRequestConfig {
		schema?: z.ZodSchema;
	}
}
