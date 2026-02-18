interface LastUpdatedProps {
  date?: Date;
  format?: 'long' | 'short';
  showTime?: boolean;
  className?: string;
}

export default function LastUpdated({
  date = new Date(),
  format = 'long',
  showTime = false,
  className = ''
}: LastUpdatedProps) {
  const formatDate = (d: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: format === 'long' ? 'long' : '2-digit',
      day: 'numeric',
      ...(showTime && {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Santiago'
      })
    };

    return new Intl.DateTimeFormat('es-CL', options).format(d);
  };

  const humanReadableDate = formatDate(date);
  const isoDate = date.toISOString().split('T')[0];

  return (
    <div className={`mt-8 pt-8 border-t border-gray-200 ${className}`}>
      <div className="flex items-center text-sm text-gray-500">
        <span>
          Última actualización:{' '}
          <time dateTime={isoDate}>{humanReadableDate}</time>
        </span>
      </div>
    </div>
  );
}
