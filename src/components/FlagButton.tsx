import { useState } from 'react'
import { trackEvent } from '../lib/analytics'
import type { Dimension, JlptLevel } from '../types'

// Lets the user report a bad exercise. Sends a `flag_item` analytics event with
// the item's stable id so flagged content can be found and fixed later.
export function FlagButton({
  itemId,
  level,
  dimension,
}: {
  itemId: string
  level: JlptLevel
  dimension: Dimension
}) {
  const [flagged, setFlagged] = useState(false)

  if (flagged) {
    return <span className="flag flagged">⚑ Flagged — thanks!</span>
  }

  return (
    <button
      className="flag"
      onClick={() => {
        trackEvent('flag_item', { level, dimension, item: itemId })
        setFlagged(true)
      }}
    >
      ⚑ Report a problem with this item
    </button>
  )
}
