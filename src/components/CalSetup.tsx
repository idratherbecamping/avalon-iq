'use client'

import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

// Wires up every BookButton on the page to the Cal.com popup.
export default function CalSetup() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return null
}
