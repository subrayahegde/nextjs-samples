export function formatDate(dateString, options) {  
  const { format } = new Intl.DateTimeFormat('en-GB', options)
  return format(new Date(dateString))
}
