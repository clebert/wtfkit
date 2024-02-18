import type { z } from 'zod';

export function deserializeJson<TSchema extends z.ZodType>(
  text: string,
  schema: TSchema,
): z.TypeOf<TSchema> | undefined {
  const result = schema.safeParse(JSON.parse(text));

  return result.success ? result.data : undefined;
}
