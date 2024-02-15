import type { z } from 'zod';

export function deserializeJson<TSchema extends z.ZodType>(
  text: string,
  schema: TSchema,
): z.TypeOf<TSchema> | undefined {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return schema.parse(JSON.parse(text));
  } catch {
    return undefined;
  }
}
