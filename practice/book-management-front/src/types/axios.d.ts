// axios.d.ts
import { z } from 'zod/v4';
import 'axios';

declare module 'axios' {
	interface AxiosRequestConfig {
		schema?: z.ZodSchema;
	}
}
