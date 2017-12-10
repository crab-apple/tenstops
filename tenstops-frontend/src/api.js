const fetch = window.fetch

export function fetchReads () {
  return addDelayToPromise(
    fetch('/fakeData/reads.json').then((response) => {
      return response.json()
    })
  )
}

export function fetchRead (readId) {
  return fetchReads().then((reads) => {
    return reads.find((r) => r.id === readId)
  })
}

export function fetchReadContent (readId) {
  return addDelayToPromise(
    fetch(`/fakeData/readContents/${readId}.md`).then((response) => {
      return response.text()
    })
  )
}

const addDelayToPromise = (originalPromise) => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      originalPromise.then(
        (value) => {
          resolve(value)
        },
        (reason) => {
          reject(reason)
        }
      )
    }, randomDelay())
  })
}

const randomDelay = () => (100 + Math.floor(Math.random() * 500))
