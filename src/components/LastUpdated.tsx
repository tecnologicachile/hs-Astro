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
        <svg
          className="w-4 h-4 mr-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          <span className="font-semibold text-gray-600">Última actualización:</span>{' '}
          <time dateTime={isoDate}>{humanReadableDate}</time>
        </span>
      </div>
    </div>
  );
}
