/**
 * Figma: "Campaign note" — "More than flowers" in Caveat 32, tone-6, turned 6°
 * anticlockwise. The frame at x 1110, y 690 is the 203×61 box around the
 * rotated text; the text is centred in it here.
 */
export function CampaignNote() {
  return (
    <div className="absolute top-172.5 left-277.5 flex h-15.25 w-50.75 items-center justify-center">
      <p className="flex-none rotate-[-6deg] font-script figma-text-32 leading-[normal] whitespace-nowrap text-tone-6">
        More than flowers
      </p>
    </div>
  )
}
