import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

const date = dayjs().tz('America/New_York').startOf('month')

try {
  document.write(date.format())
} catch (e) {
  document.write(e.message)
}
