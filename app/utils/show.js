export function getRatingTextAndColor(rating) {
  if (rating > 85) {
    return ['Great', 'green']
  } else if (rating > 70) {
    return ['Good', '#fdc70c']
  } else if (rating > 50) {
    return ['OK', '#f3903f']
  } else if (rating > 30) {
    return ['Bad', '#ed683c']
  }
  return ['Awful', 'red']
}
