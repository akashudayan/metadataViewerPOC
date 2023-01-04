export default function getUrl(path: string, fullPath: boolean = false): string {
  let host = process.env.REACT_APP_HOST

  if (process.env.NODE_ENV === 'production') {
    host = `${window.location.protocol}//${window.location.host}`
  }
  let url = `${String(host)}/${path}/`
  if (fullPath) {
    url = `${path}/`
  }
  return url
}
