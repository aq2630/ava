/* eslint-disable no-undef */
const useScript = (params, id) => {
  const subscribe = () => {
    if (!id || (!params.url && !params.innerHtml)) return

    const script = document.createElement('script')
    script.id = id

    if (params.url) {
      script.src = params.url
      script.defer = params.defer
      script.async = params.async
    } else {
      script.innerHTML = params.innerHtml
    }

    if (!document.getElementById(id)) {
      setTimeout(() => {
        document.body.appendChild(script)
      }, 1000)
    }
  }
  const unsubscribe = () => {
    if (document.getElementById(id))
      document.body.removeChild(document.getElementById(id))
  }
  return { subscribe, unsubscribe }
}

export { useScript }
