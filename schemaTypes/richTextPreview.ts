/**
 * Flattens a richText (PortableText) value into a short plain-text string,
 * so array items holding rich text still show readable titles in Studio lists.
 */
export function plainTextPreview(blocks?: any[], fallback = 'Empty'): string {
  const text = (blocks ?? [])
    .filter((block) => block?._type === 'block')
    .map((block) => (block.children ?? []).map((child: any) => child?.text ?? '').join(''))
    .join(' ')
    .trim()

  return text || fallback
}
