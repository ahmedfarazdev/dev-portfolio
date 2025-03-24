import { format, parseISO } from "date-fns"

type LastUpdatedProps = {
  publishDate: string
  updateDate?: string | null
}

export default function LastUpdated({ publishDate, updateDate }: LastUpdatedProps) {
  const formatDate = (dateString: string) => {
    return format(parseISO(dateString), "MMMM d, yyyy")
  }

  return (
    <div className="last-updated text-sm text-muted-foreground">
      <p>
        Published: <time dateTime={publishDate}>{formatDate(publishDate)}</time>
        {updateDate && (
          <>
            {" • "}
            Last updated: <time dateTime={updateDate}>{formatDate(updateDate)}</time>
          </>
        )}
      </p>
    </div>
  )
}

