import { useMemo } from 'react'

type ReadableParagraphProps = {
  text: string
  className?: string
  sentencesPerChunk?: number
}

function splitIntoChunks(text: string, sentencesPerChunk: number) {
  const cleanText = text.trim()
  if (!cleanText) {
    return []
  }

  const sentences = cleanText.split(/(?<=[.!?])\s+/).filter(Boolean)
  if (sentences.length <= 1) {
    return [cleanText]
  }

  const chunks: string[] = []
  for (let index = 0; index < sentences.length; index += sentencesPerChunk) {
    chunks.push(sentences.slice(index, index + sentencesPerChunk).join(' '))
  }

  return chunks
}

export function ReadableParagraph({ text, className = '', sentencesPerChunk = 2 }: ReadableParagraphProps) {
  const chunks = useMemo(() => splitIntoChunks(text, Math.max(sentencesPerChunk, 1)), [text, sentencesPerChunk])

  if (chunks.length <= 1) {
    return <p className={className}>{text}</p>
  }

  const desktopClassName = `hidden sm:block ${className}`.trim()
  const mobileClassName = `sm:hidden ${className}`.trim()

  return (
    <>
      <p className={desktopClassName}>{text}</p>
      <div className="space-y-3 sm:hidden">
        {chunks.map((chunk, index) => (
          <p key={`${index}-${chunk.slice(0, 24)}`} className={mobileClassName}>
            {chunk}
          </p>
        ))}
      </div>
    </>
  )
}
