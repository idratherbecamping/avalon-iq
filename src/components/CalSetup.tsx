'use client'

import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

// Wires up every BookButton on the page to the Cal.com popup.
export default function CalSetup() {
  useEffect(() => {
    // Once the popup is ready, stop booking links from also navigating to cal.com.
    const keepOnPage = (e: MouseEvent) => {
      if ((e.target as Element).closest('a[data-cal-link]')) e.preventDefault()
    }
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      document.addEventListener('click', keepOnPage)
    })();
    return () => document.removeEventListener('click', keepOnPage)
  }, [])

  return null
}
