"use client"

import { Clientable, dict } from "./anys"

export var FCssHelper = {
accentColor (value?:string){ return value as string},
additiveSymbols (value?:string){ return value as string},
alignContent (value?:string){ return value as string},
alignItems (value?:string){ return value as string},
alignSelf (value?:string){ return value as string},
alignmentBaseline (value?:string){ return value as string},
all (value?:string){ return value as string},
anchorName (value?:string){ return value as string},
anchorScope (value?:string){ return value as string},
animation (value?:string){ return value as string},
animationComposition (value?:string){ return value as string},
animationDelay (value?:string){ return value as string},
animationDirection (value?:string){ return value as string},
animationDuration (value?:string){ return value as string},
animationFillMode (value?:string){ return value as string},
animationIterationCount (value?:string){ return value as string},
animationName (value?:string){ return value as string},
animationPlayState (value?:string){ return value as string},
animationRange (value?:string){ return value as string},
animationRangeEnd (value?:string){ return value as string},
animationRangeStart (value?:string){ return value as string},
animationTimeline (value?:string){ return value as string},
animationTimingFunction (value?:string){ return value as string},
appRegion (value?:string){ return value as string},
appearance (value?:string){ return value as string},
ascentOverride (value?:string){ return value as string},
aspectRatio (value?:string){ return value as string},
backdropFilter (value?:string){ return value as string},
backfaceVisibility (value?:string){ return value as string},
background (value?:string){ return value as string},
backgroundAttachment (value?:string){ return value as string},
backgroundBlendMode (value?:string){ return value as string},
backgroundClip (value?:string){ return value as string},
backgroundColor (value?:string){ return value as string},
backgroundImage (value?:string){ return value as string},
backgroundOrigin (value?:string){ return value as string},
backgroundPosition (value?:string){ return value as string},
backgroundPositionX (value?:string){ return value as string},
backgroundPositionY (value?:string){ return value as string},
backgroundRepeat (value?:string){ return value as string},
backgroundSize (value?:string){ return value as string},
basePalette (value?:string){ return value as string},
baselineShift (value?:string){ return value as string},
baselineSource (value?:string){ return value as string},
blockSize (value?:string){ return value as string},
border (value?:string){ return value as string},
borderBlock (value?:string){ return value as string},
borderBlockColor (value?:string){ return value as string},
borderBlockEnd (value?:string){ return value as string},
borderBlockEndColor (value?:string){ return value as string},
borderBlockEndStyle (value?:string){ return value as string},
borderBlockEndWidth (value?:string){ return value as string},
borderBlockStart (value?:string){ return value as string},
borderBlockStartColor (value?:string){ return value as string},
borderBlockStartStyle (value?:string){ return value as string},
borderBlockStartWidth (value?:string){ return value as string},
borderBlockStyle (value?:string){ return value as string},
borderBlockWidth (value?:string){ return value as string},
borderBottom (value?:string){ return value as string},
borderBottomColor (value?:string){ return value as string},
borderBottomLeftRadius (value?:string){ return value as string},
borderBottomRightRadius (value?:string){ return value as string},
borderBottomStyle (value?:string){ return value as string},
borderBottomWidth (value?:string){ return value as string},
borderCollapse (value?:string){ return value as string},
borderColor (value?:string){ return value as string},
borderEndEndRadius (value?:string){ return value as string},
borderEndStartRadius (value?:string){ return value as string},
borderImage (value?:string){ return value as string},
borderImageOutset (value?:string){ return value as string},
borderImageRepeat (value?:string){ return value as string},
borderImageSlice (value?:string){ return value as string},
borderImageSource (value?:string){ return value as string},
borderImageWidth (value?:string){ return value as string},
borderInline (value?:string){ return value as string},
borderInlineColor (value?:string){ return value as string},
borderInlineEnd (value?:string){ return value as string},
borderInlineEndColor (value?:string){ return value as string},
borderInlineEndStyle (value?:string){ return value as string},
borderInlineEndWidth (value?:string){ return value as string},
borderInlineStart (value?:string){ return value as string},
borderInlineStartColor (value?:string){ return value as string},
borderInlineStartStyle (value?:string){ return value as string},
borderInlineStartWidth (value?:string){ return value as string},
borderInlineStyle (value?:string){ return value as string},
borderInlineWidth (value?:string){ return value as string},
borderLeft (value?:string){ return value as string},
borderLeftColor (value?:string){ return value as string},
borderLeftStyle (value?:string){ return value as string},
borderLeftWidth (value?:string){ return value as string},
borderRadius (value?:string){ return value as string},
borderRight (value?:string){ return value as string},
borderRightColor (value?:string){ return value as string},
borderRightStyle (value?:string){ return value as string},
borderRightWidth (value?:string){ return value as string},
borderSpacing (value?:string){ return value as string},
borderStartEndRadius (value?:string){ return value as string},
borderStartStartRadius (value?:string){ return value as string},
borderStyle (value?:string){ return value as string},
borderTop (value?:string){ return value as string},
borderTopColor (value?:string){ return value as string},
borderTopLeftRadius (value?:string){ return value as string},
borderTopRightRadius (value?:string){ return value as string},
borderTopStyle (value?:string){ return value as string},
borderTopWidth (value?:string){ return value as string},
borderWidth (value?:string){ return value as string},
bottom (value?:string){ return value as string},
boxDecorationBreak (value?:string){ return value as string},
boxShadow (value?:string){ return value as string},
boxSizing (value?:string){ return value as string},
breakAfter (value?:string){ return value as string},
breakBefore (value?:string){ return value as string},
breakInside (value?:string){ return value as string},
bufferedRendering (value?:string){ return value as string},
captionSide (value?:string){ return value as string},
caretColor (value?:string){ return value as string},
clear (value?:string){ return value as string},
clip (value?:string){ return value as string},
clipPath (value?:string){ return value as string},
clipRule (value?:string){ return value as string},
color (value?:string){ return value as string},
colorInterpolation (value?:string){ return value as string},
colorInterpolationFilters (value?:string){ return value as string},
colorRendering (value?:string){ return value as string},
colorScheme (value?:string){ return value as string},
columnCount (value?:string){ return value as string},
columnFill (value?:string){ return value as string},
columnGap (value?:string){ return value as string},
columnRule (value?:string){ return value as string},
columnRuleColor (value?:string){ return value as string},
columnRuleStyle (value?:string){ return value as string},
columnRuleWidth (value?:string){ return value as string},
columnSpan (value?:string){ return value as string},
columnWidth (value?:string){ return value as string},
columns (value?:string){ return value as string},
contain (value?:string){ return value as string},
containIntrinsicBlockSize (value?:string){ return value as string},
containIntrinsicHeight (value?:string){ return value as string},
containIntrinsicInlineSize (value?:string){ return value as string},
containIntrinsicSize (value?:string){ return value as string},
containIntrinsicWidth (value?:string){ return value as string},
container (value?:string){ return value as string},
containerName (value?:string){ return value as string},
containerType (value?:string){ return value as string},
content (value?:string){ return value as string},
contentVisibility (value?:string){ return value as string},
counterIncrement (value?:string){ return value as string},
counterReset (value?:string){ return value as string},
counterSet (value?:string){ return value as string},
cursor (value?:string){ return value as string},
cx (value?:string){ return value as string},
cy (value?:string){ return value as string},
d (value?:string){ return value as string},
descentOverride (value?:string){ return value as string},
direction (value?:string){ return value as string},
display (value?:string){ return value as string},
dominantBaseline (value?:string){ return value as string},
emptyCells (value?:string){ return value as string},
fallback (value?:string){ return value as string},
fieldSizing (value?:string){ return value as string},
fill (value?:string){ return value as string},
fillOpacity (value?:string){ return value as string},
fillRule (value?:string){ return value as string},
filter (value?:string){ return value as string},
flex (value?:string){ return value as string},
flexBasis (value?:string){ return value as string},
flexDirection (value?:string){ return value as string},
flexFlow (value?:string){ return value as string},
flexGrow (value?:string){ return value as string},
flexShrink (value?:string){ return value as string},
flexWrap (value?:string){ return value as string},
float (value?:string){ return value as string},
floodColor (value?:string){ return value as string},
floodOpacity (value?:string){ return value as string},
font (value?:string){ return value as string},
fontDisplay (value?:string){ return value as string},
fontFamily (value?:string){ return value as string},
fontFeatureSettings (value?:string){ return value as string},
fontKerning (value?:string){ return value as string},
fontOpticalSizing (value?:string){ return value as string},
fontPalette (value?:string){ return value as string},
fontSize (value?:string){ return value as string},
fontSizeAdjust (value?:string){ return value as string},
fontStretch (value?:string){ return value as string},
fontStyle (value?:string){ return value as string},
fontSynthesis (value?:string){ return value as string},
fontSynthesisSmallCaps (value?:string){ return value as string},
fontSynthesisStyle (value?:string){ return value as string},
fontSynthesisWeight (value?:string){ return value as string},
fontVariant (value?:string){ return value as string},
fontVariantAlternates (value?:string){ return value as string},
fontVariantCaps (value?:string){ return value as string},
fontVariantEastAsian (value?:string){ return value as string},
fontVariantEmoji (value?:string){ return value as string},
fontVariantLigatures (value?:string){ return value as string},
fontVariantNumeric (value?:string){ return value as string},
fontVariantPosition (value?:string){ return value as string},
fontVariationSettings (value?:string){ return value as string},
fontWeight (value?:string){ return value as string},
forcedColorAdjust (value?:string){ return value as string},
gap (value?:string){ return value as string},
grid (value?:string){ return value as string},
gridArea (value?:string){ return value as string},
gridAutoColumns (value?:string){ return value as string},
gridAutoFlow (value?:string){ return value as string},
gridAutoRows (value?:string){ return value as string},
gridColumn (value?:string){ return value as string},
gridColumnEnd (value?:string){ return value as string},
gridColumnGap (value?:string){ return value as string},
gridColumnStart (value?:string){ return value as string},
gridGap (value?:string){ return value as string},
gridRow (value?:string){ return value as string},
gridRowEnd (value?:string){ return value as string},
gridRowGap (value?:string){ return value as string},
gridRowStart (value?:string){ return value as string},
gridTemplate (value?:string){ return value as string},
gridTemplateAreas (value?:string){ return value as string},
gridTemplateColumns (value?:string){ return value as string},
gridTemplateRows (value?:string){ return value as string},
height (value?:string){ return value as string},
hyphenateCharacter (value?:string){ return value as string},
hyphenateLimitChars (value?:string){ return value as string},
hyphens (value?:string){ return value as string},
imageOrientation (value?:string){ return value as string},
imageRendering (value?:string){ return value as string},
inherits (value?:string){ return value as string},
initialLetter (value?:string){ return value as string},
initialValue (value?:string){ return value as string},
inlineSize (value?:string){ return value as string},
inset (value?:string){ return value as string},
insetBlock (value?:string){ return value as string},
insetBlockEnd (value?:string){ return value as string},
insetBlockStart (value?:string){ return value as string},
insetInline (value?:string){ return value as string},
insetInlineEnd (value?:string){ return value as string},
insetInlineStart (value?:string){ return value as string},
interpolateSize (value?:string){ return value as string},
isolation (value?:string){ return value as string},
justifyContent (value?:string){ return value as string},
justifyItems (value?:string){ return value as string},
justifySelf (value?:string){ return value as string},
left (value?:string){ return value as string},
letterSpacing (value?:string){ return value as string},
lightingColor (value?:string){ return value as string},
lineBreak (value?:string){ return value as string},
lineGapOverride (value?:string){ return value as string},
lineHeight (value?:string){ return value as string},
listStyle (value?:string){ return value as string},
listStyleImage (value?:string){ return value as string},
listStylePosition (value?:string){ return value as string},
listStyleType (value?:string){ return value as string},
margin (value?:string){ return value as string},
marginBlock (value?:string){ return value as string},
marginBlockEnd (value?:string){ return value as string},
marginBlockStart (value?:string){ return value as string},
marginBottom (value?:string){ return value as string},
marginInline (value?:string){ return value as string},
marginInlineEnd (value?:string){ return value as string},
marginInlineStart (value?:string){ return value as string},
marginLeft (value?:string){ return value as string},
marginRight (value?:string){ return value as string},
marginTop (value?:string){ return value as string},
marker (value?:string){ return value as string},
markerEnd (value?:string){ return value as string},
markerMid (value?:string){ return value as string},
markerStart (value?:string){ return value as string},
mask (value?:string){ return value as string},
maskClip (value?:string){ return value as string},
maskComposite (value?:string){ return value as string},
maskImage (value?:string){ return value as string},
maskMode (value?:string){ return value as string},
maskOrigin (value?:string){ return value as string},
maskPosition (value?:string){ return value as string},
maskRepeat (value?:string){ return value as string},
maskSize (value?:string){ return value as string},
maskType (value?:string){ return value as string},
mathDepth (value?:string){ return value as string},
mathShift (value?:string){ return value as string},
mathStyle (value?:string){ return value as string},
maxBlockSize (value?:string){ return value as string},
maxHeight (value?:string){ return value as string},
maxInlineSize (value?:string){ return value as string},
maxWidth (value?:string){ return value as string},
minBlockSize (value?:string){ return value as string},
minHeight (value?:string){ return value as string},
minInlineSize (value?:string){ return value as string},
minWidth (value?:string){ return value as string},
mixBlendMode (value?:string){ return value as string},
navigation (value?:string){ return value as string},
negative (value?:string){ return value as string},
objectFit (value?:string){ return value as string},
objectPosition (value?:string){ return value as string},
objectViewBox (value?:string){ return value as string},
offset (value?:string){ return value as string},
offsetAnchor (value?:string){ return value as string},
offsetDistance (value?:string){ return value as string},
offsetPath (value?:string){ return value as string},
offsetPosition (value?:string){ return value as string},
offsetRotate (value?:string){ return value as string},
opacity (value?:string){ return value as string},
order (value?:string){ return value as string},
orphans (value?:string){ return value as string},
outline (value?:string){ return value as string},
outlineColor (value?:string){ return value as string},
outlineOffset (value?:string){ return value as string},
outlineStyle (value?:string){ return value as string},
outlineWidth (value?:string){ return value as string},
overflow (value?:string){ return value as string},
overflowAnchor (value?:string){ return value as string},
overflowClipMargin (value?:string){ return value as string},
overflowWrap (value?:string){ return value as string},
overflowX (value?:string){ return value as string},
overflowY (value?:string){ return value as string},
overlay (value?:string){ return value as string},
overrideColors (value?:string){ return value as string},
overscrollBehavior (value?:string){ return value as string},
overscrollBehaviorBlock (value?:string){ return value as string},
overscrollBehaviorInline (value?:string){ return value as string},
overscrollBehaviorX (value?:string){ return value as string},
overscrollBehaviorY (value?:string){ return value as string},
pad (value?:string){ return value as string},
padding (value?:string){ return value as string},
paddingBlock (value?:string){ return value as string},
paddingBlockEnd (value?:string){ return value as string},
paddingBlockStart (value?:string){ return value as string},
paddingBottom (value?:string){ return value as string},
paddingInline (value?:string){ return value as string},
paddingInlineEnd (value?:string){ return value as string},
paddingInlineStart (value?:string){ return value as string},
paddingLeft (value?:string){ return value as string},
paddingRight (value?:string){ return value as string},
paddingTop (value?:string){ return value as string},
page (value?:string){ return value as string},
pageBreakAfter (value?:string){ return value as string},
pageBreakBefore (value?:string){ return value as string},
pageBreakInside (value?:string){ return value as string},
pageOrientation (value?:string){ return value as string},
paintOrder (value?:string){ return value as string},
perspective (value?:string){ return value as string},
perspectiveOrigin (value?:string){ return value as string},
placeContent (value?:string){ return value as string},
placeItems (value?:string){ return value as string},
placeSelf (value?:string){ return value as string},
pointerEvents (value?:string){ return value as string},
position (value?:string){ return value as string},
positionAnchor (value?:string){ return value as string},
positionArea (value?:string){ return value as string},
positionTry (value?:string){ return value as string},
positionTryFallbacks (value?:string){ return value as string},
positionTryOrder (value?:string){ return value as string},
positionVisibility (value?:string){ return value as string},
prefix (value?:string){ return value as string},
quotes (value?:string){ return value as string},
r (value?:string){ return value as string},
range (value?:string){ return value as string},
resize (value?:string){ return value as string},
right (value?:string){ return value as string},
rotate (value?:string){ return value as string},
rowGap (value?:string){ return value as string},
rubyAlign (value?:string){ return value as string},
rubyPosition (value?:string){ return value as string},
rx (value?:string){ return value as string},
ry (value?:string){ return value as string},
scale (value?:string){ return value as string},
scrollBehavior (value?:string){ return value as string},
scrollMargin (value?:string){ return value as string},
scrollMarginBlock (value?:string){ return value as string},
scrollMarginBlockEnd (value?:string){ return value as string},
scrollMarginBlockStart (value?:string){ return value as string},
scrollMarginBottom (value?:string){ return value as string},
scrollMarginInline (value?:string){ return value as string},
scrollMarginInlineEnd (value?:string){ return value as string},
scrollMarginInlineStart (value?:string){ return value as string},
scrollMarginLeft (value?:string){ return value as string},
scrollMarginRight (value?:string){ return value as string},
scrollMarginTop (value?:string){ return value as string},
scrollPadding (value?:string){ return value as string},
scrollPaddingBlock (value?:string){ return value as string},
scrollPaddingBlockEnd (value?:string){ return value as string},
scrollPaddingBlockStart (value?:string){ return value as string},
scrollPaddingBottom (value?:string){ return value as string},
scrollPaddingInline (value?:string){ return value as string},
scrollPaddingInlineEnd (value?:string){ return value as string},
scrollPaddingInlineStart (value?:string){ return value as string},
scrollPaddingLeft (value?:string){ return value as string},
scrollPaddingRight (value?:string){ return value as string},
scrollPaddingTop (value?:string){ return value as string},
scrollSnapAlign (value?:string){ return value as string},
scrollSnapStop (value?:string){ return value as string},
scrollSnapType (value?:string){ return value as string},
scrollTimeline (value?:string){ return value as string},
scrollTimelineAxis (value?:string){ return value as string},
scrollTimelineName (value?:string){ return value as string},
scrollbarColor (value?:string){ return value as string},
scrollbarGutter (value?:string){ return value as string},
scrollbarWidth (value?:string){ return value as string},
shapeImageThreshold (value?:string){ return value as string},
shapeMargin (value?:string){ return value as string},
shapeOutside (value?:string){ return value as string},
shapeRendering (value?:string){ return value as string},
size (value?:string){ return value as string},
sizeAdjust (value?:string){ return value as string},
speak (value?:string){ return value as string},
speakAs (value?:string){ return value as string},
src (value?:string){ return value as string},
stopColor (value?:string){ return value as string},
stopOpacity (value?:string){ return value as string},
stringoke (value?:string){ return value as string},
stringokeDasharray (value?:string){ return value as string},
stringokeDashoffset (value?:string){ return value as string},
stringokeLinecap (value?:string){ return value as string},
stringokeLinejoin (value?:string){ return value as string},
stringokeMiterlimit (value?:string){ return value as string},
stringokeOpacity (value?:string){ return value as string},
stringokeWidth (value?:string){ return value as string},
suffix (value?:string){ return value as string},
symbols (value?:string){ return value as string},
syntax (value?:string){ return value as string},
system (value?:string){ return value as string},
tabSize (value?:string){ return value as string},
tableLayout (value?:string){ return value as string},
textAlign (value?:string){ return value as string},
textAlignLast (value?:string){ return value as string},
textAnchor (value?:string){ return value as string},
textCombineUpright (value?:string){ return value as string},
textDecoration (value?:string){ return value as string},
textDecorationColor (value?:string){ return value as string},
textDecorationLine (value?:string){ return value as string},
textDecorationSkipInk (value?:string){ return value as string},
textDecorationStyle (value?:string){ return value as string},
textDecorationThickness (value?:string){ return value as string},
textEmphasis (value?:string){ return value as string},
textEmphasisColor (value?:string){ return value as string},
textEmphasisPosition (value?:string){ return value as string},
textEmphasisStyle (value?:string){ return value as string},
textIndent (value?:string){ return value as string},
textOrientation (value?:string){ return value as string},
textOverflow (value?:string){ return value as string},
textRendering (value?:string){ return value as string},
textShadow (value?:string){ return value as string},
textSizeAdjust (value?:string){ return value as string},
textSpacingTrim (value?:string){ return value as string},
textTransform (value?:string){ return value as string},
textUnderlineOffset (value?:string){ return value as string},
textUnderlinePosition (value?:string){ return value as string},
textWrap (value?:string){ return value as string},
textWrapMode (value?:string){ return value as string},
textWrapStyle (value?:string){ return value as string},
timelineScope (value?:string){ return value as string},
top (value?:string){ return value as string},
touchAction (value?:string){ return value as string},
transform (value?:string){ return value as string},
transformBox (value?:string){ return value as string},
transformOrigin (value?:string){ return value as string},
transformStyle (value?:string){ return value as string},
transition (value?:string){ return value as string},
transitionBehavior (value?:string){ return value as string},
transitionDelay (value?:string){ return value as string},
transitionDuration (value?:string){ return value as string},
transitionProperty (value?:string){ return value as string},
transitionTimingFunction (value?:string){ return value as string},
translate (value?:string){ return value as string},
types (value?:string){ return value as string},
unicodeBidi (value?:string){ return value as string},
unicodeRange (value?:string){ return value as string},
userSelect (value?:string){ return value as string},
vectorEffect (value?:string){ return value as string},
verticalAlign (value?:string){ return value as string},
viewTimeline (value?:string){ return value as string},
viewTimelineAxis (value?:string){ return value as string},
viewTimelineInset (value?:string){ return value as string},
viewTimelineName (value?:string){ return value as string},
viewTransitionClass (value?:string){ return value as string},
viewTransitionName (value?:string){ return value as string},
visibility (value?:string){ return value as string},
webkitAlignContent (value?:string){ return value as string},
webkitAlignItems (value?:string){ return value as string},
webkitAlignSelf (value?:string){ return value as string},
webkitAnimation (value?:string){ return value as string},
webkitAnimationDelay (value?:string){ return value as string},
webkitAnimationDirection (value?:string){ return value as string},
webkitAnimationDuration (value?:string){ return value as string},
webkitAnimationFillMode (value?:string){ return value as string},
webkitAnimationIterationCount (value?:string){ return value as string},
webkitAnimationName (value?:string){ return value as string},
webkitAnimationPlayState (value?:string){ return value as string},
webkitAnimationTimingFunction (value?:string){ return value as string},
webkitAppRegion (value?:string){ return value as string},
webkitAppearance (value?:string){ return value as string},
webkitBackfaceVisibility (value?:string){ return value as string},
webkitBackgroundClip (value?:string){ return value as string},
webkitBackgroundOrigin (value?:string){ return value as string},
webkitBackgroundSize (value?:string){ return value as string},
webkitBorderAfter (value?:string){ return value as string},
webkitBorderAfterColor (value?:string){ return value as string},
webkitBorderAfterStyle (value?:string){ return value as string},
webkitBorderAfterWidth (value?:string){ return value as string},
webkitBorderBefore (value?:string){ return value as string},
webkitBorderBeforeColor (value?:string){ return value as string},
webkitBorderBeforeStyle (value?:string){ return value as string},
webkitBorderBeforeWidth (value?:string){ return value as string},
webkitBorderBottomLeftRadius (value?:string){ return value as string},
webkitBorderBottomRightRadius (value?:string){ return value as string},
webkitBorderEnd (value?:string){ return value as string},
webkitBorderEndColor (value?:string){ return value as string},
webkitBorderEndStyle (value?:string){ return value as string},
webkitBorderEndWidth (value?:string){ return value as string},
webkitBorderHorizontalSpacing (value?:string){ return value as string},
webkitBorderImage (value?:string){ return value as string},
webkitBorderRadius (value?:string){ return value as string},
webkitBorderStart (value?:string){ return value as string},
webkitBorderStartColor (value?:string){ return value as string},
webkitBorderStartStyle (value?:string){ return value as string},
webkitBorderStartWidth (value?:string){ return value as string},
webkitBorderTopLeftRadius (value?:string){ return value as string},
webkitBorderTopRightRadius (value?:string){ return value as string},
webkitBorderVerticalSpacing (value?:string){ return value as string},
webkitBoxAlign (value?:string){ return value as string},
webkitBoxDecorationBreak (value?:string){ return value as string},
webkitBoxDirection (value?:string){ return value as string},
webkitBoxFlex (value?:string){ return value as string},
webkitBoxOrdinalGroup (value?:string){ return value as string},
webkitBoxOrient (value?:string){ return value as string},
webkitBoxPack (value?:string){ return value as string},
webkitBoxReflect (value?:string){ return value as string},
webkitBoxShadow (value?:string){ return value as string},
webkitBoxSizing (value?:string){ return value as string},
webkitClipPath (value?:string){ return value as string},
webkitColumnBreakAfter (value?:string){ return value as string},
webkitColumnBreakBefore (value?:string){ return value as string},
webkitColumnBreakInside (value?:string){ return value as string},
webkitColumnCount (value?:string){ return value as string},
webkitColumnGap (value?:string){ return value as string},
webkitColumnRule (value?:string){ return value as string},
webkitColumnRuleColor (value?:string){ return value as string},
webkitColumnRuleStyle (value?:string){ return value as string},
webkitColumnRuleWidth (value?:string){ return value as string},
webkitColumnSpan (value?:string){ return value as string},
webkitColumnWidth (value?:string){ return value as string},
webkitColumns (value?:string){ return value as string},
webkitFilter (value?:string){ return value as string},
webkitFlex (value?:string){ return value as string},
webkitFlexBasis (value?:string){ return value as string},
webkitFlexDirection (value?:string){ return value as string},
webkitFlexFlow (value?:string){ return value as string},
webkitFlexGrow (value?:string){ return value as string},
webkitFlexShrink (value?:string){ return value as string},
webkitFlexWrap (value?:string){ return value as string},
webkitFontFeatureSettings (value?:string){ return value as string},
webkitFontSmoothing (value?:string){ return value as string},
webkitHyphenateCharacter (value?:string){ return value as string},
webkitJustifyContent (value?:string){ return value as string},
webkitLineBreak (value?:string){ return value as string},
webkitLineClamp (value?:string){ return value as string},
webkitLocale (value?:string){ return value as string},
webkitLogicalHeight (value?:string){ return value as string},
webkitLogicalWidth (value?:string){ return value as string},
webkitMarginAfter (value?:string){ return value as string},
webkitMarginBefore (value?:string){ return value as string},
webkitMarginEnd (value?:string){ return value as string},
webkitMarginStart (value?:string){ return value as string},
webkitMask (value?:string){ return value as string},
webkitMaskBoxImage (value?:string){ return value as string},
webkitMaskBoxImageOutset (value?:string){ return value as string},
webkitMaskBoxImageRepeat (value?:string){ return value as string},
webkitMaskBoxImageSlice (value?:string){ return value as string},
webkitMaskBoxImageSource (value?:string){ return value as string},
webkitMaskBoxImageWidth (value?:string){ return value as string},
webkitMaskClip (value?:string){ return value as string},
webkitMaskComposite (value?:string){ return value as string},
webkitMaskImage (value?:string){ return value as string},
webkitMaskOrigin (value?:string){ return value as string},
webkitMaskPosition (value?:string){ return value as string},
webkitMaskPositionX (value?:string){ return value as string},
webkitMaskPositionY (value?:string){ return value as string},
webkitMaskRepeat (value?:string){ return value as string},
webkitMaskSize (value?:string){ return value as string},
webkitMaxLogicalHeight (value?:string){ return value as string},
webkitMaxLogicalWidth (value?:string){ return value as string},
webkitMinLogicalHeight (value?:string){ return value as string},
webkitMinLogicalWidth (value?:string){ return value as string},
webkitOpacity (value?:string){ return value as string},
webkitOrder (value?:string){ return value as string},
webkitPaddingAfter (value?:string){ return value as string},
webkitPaddingBefore (value?:string){ return value as string},
webkitPaddingEnd (value?:string){ return value as string},
webkitPaddingStart (value?:string){ return value as string},
webkitPerspective (value?:string){ return value as string},
webkitPerspectiveOrigin (value?:string){ return value as string},
webkitPerspectiveOriginX (value?:string){ return value as string},
webkitPerspectiveOriginY (value?:string){ return value as string},
webkitPrintColorAdjust (value?:string){ return value as string},
webkitRtlOrdering (value?:string){ return value as string},
webkitRubyPosition (value?:string){ return value as string},
webkitShapeImageThreshold (value?:string){ return value as string},
webkitShapeMargin (value?:string){ return value as string},
webkitShapeOutside (value?:string){ return value as string},
webkitTapHighlightColor (value?:string){ return value as string},
webkitTextCombine (value?:string){ return value as string},
webkitTextDecorationsInEffect (value?:string){ return value as string},
webkitTextEmphasis (value?:string){ return value as string},
webkitTextEmphasisColor (value?:string){ return value as string},
webkitTextEmphasisPosition (value?:string){ return value as string},
webkitTextEmphasisStyle (value?:string){ return value as string},
webkitTextFillColor (value?:string){ return value as string},
webkitTextOrientation (value?:string){ return value as string},
webkitTextSecurity (value?:string){ return value as string},
webkitTextSizeAdjust (value?:string){ return value as string},
webkitTextStroke (value?:string){ return value as string},
webkitTextStrokeColor (value?:string){ return value as string},
webkitTextStrokeWidth (value?:string){ return value as string},
webkitTransform (value?:string){ return value as string},
webkitTransformOrigin (value?:string){ return value as string},
webkitTransformOriginX (value?:string){ return value as string},
webkitTransformOriginY (value?:string){ return value as string},
webkitTransformOriginZ (value?:string){ return value as string},
webkitTransformStyle (value?:string){ return value as string},
webkitTransition (value?:string){ return value as string},
webkitTransitionDelay (value?:string){ return value as string},
webkitTransitionDuration (value?:string){ return value as string},
webkitTransitionProperty (value?:string){ return value as string},
webkitTransitionTimingFunction (value?:string){ return value as string},
webkitUserDrag (value?:string){ return value as string},
webkitUserModify (value?:string){ return value as string},
webkitUserSelect (value?:string){ return value as string},
webkitWritingMode (value?:string){ return value as string},
whiteSpace (value?:string){ return value as string},
whiteSpaceCollapse (value?:string){ return value as string},
widows (value?:string){ return value as string},
width (value?:string){ return value as string},
willChange (value?:string){ return value as string},
wordBreak (value?:string){ return value as string},
wordSpacing (value?:string){ return value as string},
wordWrap (value?:string){ return value as string},
writingMode (value?:string){ return value as string},
x (value?:string){ return value as string},
y (value?:string){ return value as string},
zIndex (value?:string){ return value as string},
zoom (value?:string){ return value as string},
epubCaptionSide (value?:string){ return value as string},
epubTextCombine (value?:string){ return value as string},
epubTextEmphasis (value?:string){ return value as string},
epubTextEmphasisColor (value?:string){ return value as string},
epubTextEmphasisStyle (value?:string){ return value as string},
epubTextOrientation (value?:string){ return value as string},
epubTextTransform (value?:string){ return value as string},
epubWordBreak (value?:string){ return value as string},
epubWritingMode (value?:string){ return value as string},
cssFloat (value?:string){ return value as string},
cssText (value?:string){ return value as string},
}

export type ICssHelper = {
        accentColor?:string
        additiveSymbols?:string
        alignContent?:string
        alignItems?:string
        alignSelf?:string
        alignmentBaseline?:string
        all?:string
        anchorName?:string
        anchorScope?:string
        animation?:string
        animationComposition?:string
        animationDelay?:string
        animationDirection?:string
        animationDuration?:string
        animationFillMode?:string
        animationIterationCount?:string
        animationName?:string
        animationPlayState?:string
        animationRange?:string
        animationRangeEnd?:string
        animationRangeStart?:string
        animationTimeline?:string
        animationTimingFunction?:string
        appRegion?:string
        appearance?:string
        ascentOverride?:string
        aspectRatio?:string
        backdropFilter?:string
        backfaceVisibility?:string
        background?:string
        backgroundAttachment?:string
        backgroundBlendMode?:string
        backgroundClip?:string
        backgroundColor?:string
        backgroundImage?:string
        backgroundOrigin?:string
        backgroundPosition?:string
        backgroundPositionX?:string
        backgroundPositionY?:string
        backgroundRepeat?:string
        backgroundSize?:string
        basePalette?:string
        baselineShift?:string
        baselineSource?:string
        blockSize?:string
        border?:string
        borderBlock?:string
        borderBlockColor?:string
        borderBlockEnd?:string
        borderBlockEndColor?:string
        borderBlockEndStyle?:string
        borderBlockEndWidth?:string
        borderBlockStart?:string
        borderBlockStartColor?:string
        borderBlockStartStyle?:string
        borderBlockStartWidth?:string
        borderBlockStyle?:string
        borderBlockWidth?:string
        borderBottom?:string
        borderBottomColor?:string
        borderBottomLeftRadius?:string
        borderBottomRightRadius?:string
        borderBottomStyle?:string
        borderBottomWidth?:string
        borderCollapse?:string
        borderColor?:string
        borderEndEndRadius?:string
        borderEndStartRadius?:string
        borderImage?:string
        borderImageOutset?:string
        borderImageRepeat?:string
        borderImageSlice?:string
        borderImageSource?:string
        borderImageWidth?:string
        borderInline?:string
        borderInlineColor?:string
        borderInlineEnd?:string
        borderInlineEndColor?:string
        borderInlineEndStyle?:string
        borderInlineEndWidth?:string
        borderInlineStart?:string
        borderInlineStartColor?:string
        borderInlineStartStyle?:string
        borderInlineStartWidth?:string
        borderInlineStyle?:string
        borderInlineWidth?:string
        borderLeft?:string
        borderLeftColor?:string
        borderLeftStyle?:string
        borderLeftWidth?:string
        borderRadius?:string
        borderRight?:string
        borderRightColor?:string
        borderRightStyle?:string
        borderRightWidth?:string
        borderSpacing?:string
        borderStartEndRadius?:string
        borderStartStartRadius?:string
        borderStyle?:string
        borderTop?:string
        borderTopColor?:string
        borderTopLeftRadius?:string
        borderTopRightRadius?:string
        borderTopStyle?:string
        borderTopWidth?:string
        borderWidth?:string
        bottom?:string
        boxDecorationBreak?:string
        boxShadow?:string
        boxSizing?:string
        breakAfter?:string
        breakBefore?:string
        breakInside?:string
        bufferedRendering?:string
        captionSide?:string
        caretColor?:string
        clear?:string
        clip?:string
        clipPath?:string
        clipRule?:string
        color?:string
        colorInterpolation?:string
        colorInterpolationFilters?:string
        colorRendering?:string
        colorScheme?:string
        columnCount?:string
        columnFill?:string
        columnGap?:string
        columnRule?:string
        columnRuleColor?:string
        columnRuleStyle?:string
        columnRuleWidth?:string
        columnSpan?:string
        columnWidth?:string
        columns?:string
        contain?:string
        containIntrinsicBlockSize?:string
        containIntrinsicHeight?:string
        containIntrinsicInlineSize?:string
        containIntrinsicSize?:string
        containIntrinsicWidth?:string
        container?:string
        containerName?:string
        containerType?:string
        content?:string
        contentVisibility?:string
        counterIncrement?:string
        counterReset?:string
        counterSet?:string
        cursor?:string
        cx?:string
        cy?:string
        d?:string
        descentOverride?:string
        direction?:string
        display?:string
        dominantBaseline?:string
        emptyCells?:string
        fallback?:string
        fieldSizing?:string
        fill?:string
        fillOpacity?:string
        fillRule?:string
        filter?:string
        flex?:string
        flexBasis?:string
        flexDirection?:string
        flexFlow?:string
        flexGrow?:string
        flexShrink?:string
        flexWrap?:string
        float?:string
        floodColor?:string
        floodOpacity?:string
        font?:string
        fontDisplay?:string
        fontFamily?:string
        fontFeatureSettings?:string
        fontKerning?:string
        fontOpticalSizing?:string
        fontPalette?:string
        fontSize?:string
        fontSizeAdjust?:string
        fontStretch?:string
        fontStyle?:string
        fontSynthesis?:string
        fontSynthesisSmallCaps?:string
        fontSynthesisStyle?:string
        fontSynthesisWeight?:string
        fontVariant?:string
        fontVariantAlternates?:string
        fontVariantCaps?:string
        fontVariantEastAsian?:string
        fontVariantEmoji?:string
        fontVariantLigatures?:string
        fontVariantNumeric?:string
        fontVariantPosition?:string
        fontVariationSettings?:string
        fontWeight?:string
        forcedColorAdjust?:string
        gap?:string
        grid?:string
        gridArea?:string
        gridAutoColumns?:string
        gridAutoFlow?:string
        gridAutoRows?:string
        gridColumn?:string
        gridColumnEnd?:string
        gridColumnGap?:string
        gridColumnStart?:string
        gridGap?:string
        gridRow?:string
        gridRowEnd?:string
        gridRowGap?:string
        gridRowStart?:string
        gridTemplate?:string
        gridTemplateAreas?:string
        gridTemplateColumns?:string
        gridTemplateRows?:string
        height?:string
        hyphenateCharacter?:string
        hyphenateLimitChars?:string
        hyphens?:string
        imageOrientation?:string
        imageRendering?:string
        inherits?:string
        initialLetter?:string
        initialValue?:string
        inlineSize?:string
        inset?:string
        insetBlock?:string
        insetBlockEnd?:string
        insetBlockStart?:string
        insetInline?:string
        insetInlineEnd?:string
        insetInlineStart?:string
        interpolateSize?:string
        isolation?:string
        justifyContent?:string
        justifyItems?:string
        justifySelf?:string
        left?:string
        letterSpacing?:string
        lightingColor?:string
        lineBreak?:string
        lineGapOverride?:string
        lineHeight?:string
        listStyle?:string
        listStyleImage?:string
        listStylePosition?:string
        listStyleType?:string
        margin?:string
        marginBlock?:string
        marginBlockEnd?:string
        marginBlockStart?:string
        marginBottom?:string
        marginInline?:string
        marginInlineEnd?:string
        marginInlineStart?:string
        marginLeft?:string
        marginRight?:string
        marginTop?:string
        marker?:string
        markerEnd?:string
        markerMid?:string
        markerStart?:string
        mask?:string
        maskClip?:string
        maskComposite?:string
        maskImage?:string
        maskMode?:string
        maskOrigin?:string
        maskPosition?:string
        maskRepeat?:string
        maskSize?:string
        maskType?:string
        mathDepth?:string
        mathShift?:string
        mathStyle?:string
        maxBlockSize?:string
        maxHeight?:string
        maxInlineSize?:string
        maxWidth?:string
        minBlockSize?:string
        minHeight?:string
        minInlineSize?:string
        minWidth?:string
        mixBlendMode?:string
        navigation?:string
        negative?:string
        objectFit?:string
        objectPosition?:string
        objectViewBox?:string
        offset?:string
        offsetAnchor?:string
        offsetDistance?:string
        offsetPath?:string
        offsetPosition?:string
        offsetRotate?:string
        opacity?:string
        order?:string
        orphans?:string
        outline?:string
        outlineColor?:string
        outlineOffset?:string
        outlineStyle?:string
        outlineWidth?:string
        overflow?:string
        overflowAnchor?:string
        overflowClipMargin?:string
        overflowWrap?:string
        overflowX?:string
        overflowY?:string
        overlay?:string
        overrideColors?:string
        overscrollBehavior?:string
        overscrollBehaviorBlock?:string
        overscrollBehaviorInline?:string
        overscrollBehaviorX?:string
        overscrollBehaviorY?:string
        pad?:string
        padding?:string
        paddingBlock?:string
        paddingBlockEnd?:string
        paddingBlockStart?:string
        paddingBottom?:string
        paddingInline?:string
        paddingInlineEnd?:string
        paddingInlineStart?:string
        paddingLeft?:string
        paddingRight?:string
        paddingTop?:string
        page?:string
        pageBreakAfter?:string
        pageBreakBefore?:string
        pageBreakInside?:string
        pageOrientation?:string
        paintOrder?:string
        perspective?:string
        perspectiveOrigin?:string
        placeContent?:string
        placeItems?:string
        placeSelf?:string
        pointerEvents?:string
        position?:string
        positionAnchor?:string
        positionArea?:string
        positionTry?:string
        positionTryFallbacks?:string
        positionTryOrder?:string
        positionVisibility?:string
        prefix?:string
        quotes?:string
        r?:string
        range?:string
        resize?:string
        right?:string
        rotate?:string
        rowGap?:string
        rubyAlign?:string
        rubyPosition?:string
        rx?:string
        ry?:string
        scale?:string
        scrollBehavior?:string
        scrollMargin?:string
        scrollMarginBlock?:string
        scrollMarginBlockEnd?:string
        scrollMarginBlockStart?:string
        scrollMarginBottom?:string
        scrollMarginInline?:string
        scrollMarginInlineEnd?:string
        scrollMarginInlineStart?:string
        scrollMarginLeft?:string
        scrollMarginRight?:string
        scrollMarginTop?:string
        scrollPadding?:string
        scrollPaddingBlock?:string
        scrollPaddingBlockEnd?:string
        scrollPaddingBlockStart?:string
        scrollPaddingBottom?:string
        scrollPaddingInline?:string
        scrollPaddingInlineEnd?:string
        scrollPaddingInlineStart?:string
        scrollPaddingLeft?:string
        scrollPaddingRight?:string
        scrollPaddingTop?:string
        scrollSnapAlign?:string
        scrollSnapStop?:string
        scrollSnapType?:string
        scrollTimeline?:string
        scrollTimelineAxis?:string
        scrollTimelineName?:string
        scrollbarColor?:string
        scrollbarGutter?:string
        scrollbarWidth?:string
        shapeImageThreshold?:string
        shapeMargin?:string
        shapeOutside?:string
        shapeRendering?:string
        size?:string
        sizeAdjust?:string
        speak?:string
        speakAs?:string
        src?:string
        stopColor?:string
        stopOpacity?:string
        stringoke?:string
        stringokeDasharray?:string
        stringokeDashoffset?:string
        stringokeLinecap?:string
        stringokeLinejoin?:string
        stringokeMiterlimit?:string
        stringokeOpacity?:string
        stringokeWidth?:string
        suffix?:string
        symbols?:string
        syntax?:string
        system?:string
        tabSize?:string
        tableLayout?:string
        textAlign?:string
        textAlignLast?:string
        textAnchor?:string
        textCombineUpright?:string
        textDecoration?:string
        textDecorationColor?:string
        textDecorationLine?:string
        textDecorationSkipInk?:string
        textDecorationStyle?:string
        textDecorationThickness?:string
        textEmphasis?:string
        textEmphasisColor?:string
        textEmphasisPosition?:string
        textEmphasisStyle?:string
        textIndent?:string
        textOrientation?:string
        textOverflow?:string
        textRendering?:string
        textShadow?:string
        textSizeAdjust?:string
        textSpacingTrim?:string
        textTransform?:string
        textUnderlineOffset?:string
        textUnderlinePosition?:string
        textWrap?:string
        textWrapMode?:string
        textWrapStyle?:string
        timelineScope?:string
        top?:string
        touchAction?:string
        transform?:string
        transformBox?:string
        transformOrigin?:string
        transformStyle?:string
        transition?:string
        transitionBehavior?:string
        transitionDelay?:string
        transitionDuration?:string
        transitionProperty?:string
        transitionTimingFunction?:string
        translate?:string
        types?:string
        unicodeBidi?:string
        unicodeRange?:string
        userSelect?:string
        vectorEffect?:string
        verticalAlign?:string
        viewTimeline?:string
        viewTimelineAxis?:string
        viewTimelineInset?:string
        viewTimelineName?:string
        viewTransitionClass?:string
        viewTransitionName?:string
        visibility?:string
        webkitAlignContent?:string
        webkitAlignItems?:string
        webkitAlignSelf?:string
        webkitAnimation?:string
        webkitAnimationDelay?:string
        webkitAnimationDirection?:string
        webkitAnimationDuration?:string
        webkitAnimationFillMode?:string
        webkitAnimationIterationCount?:string
        webkitAnimationName?:string
        webkitAnimationPlayState?:string
        webkitAnimationTimingFunction?:string
        webkitAppRegion?:string
        webkitAppearance?:string
        webkitBackfaceVisibility?:string
        webkitBackgroundClip?:string
        webkitBackgroundOrigin?:string
        webkitBackgroundSize?:string
        webkitBorderAfter?:string
        webkitBorderAfterColor?:string
        webkitBorderAfterStyle?:string
        webkitBorderAfterWidth?:string
        webkitBorderBefore?:string
        webkitBorderBeforeColor?:string
        webkitBorderBeforeStyle?:string
        webkitBorderBeforeWidth?:string
        webkitBorderBottomLeftRadius?:string
        webkitBorderBottomRightRadius?:string
        webkitBorderEnd?:string
        webkitBorderEndColor?:string
        webkitBorderEndStyle?:string
        webkitBorderEndWidth?:string
        webkitBorderHorizontalSpacing?:string
        webkitBorderImage?:string
        webkitBorderRadius?:string
        webkitBorderStart?:string
        webkitBorderStartColor?:string
        webkitBorderStartStyle?:string
        webkitBorderStartWidth?:string
        webkitBorderTopLeftRadius?:string
        webkitBorderTopRightRadius?:string
        webkitBorderVerticalSpacing?:string
        webkitBoxAlign?:string
        webkitBoxDecorationBreak?:string
        webkitBoxDirection?:string
        webkitBoxFlex?:string
        webkitBoxOrdinalGroup?:string
        webkitBoxOrient?:string
        webkitBoxPack?:string
        webkitBoxReflect?:string
        webkitBoxShadow?:string
        webkitBoxSizing?:string
        webkitClipPath?:string
        webkitColumnBreakAfter?:string
        webkitColumnBreakBefore?:string
        webkitColumnBreakInside?:string
        webkitColumnCount?:string
        webkitColumnGap?:string
        webkitColumnRule?:string
        webkitColumnRuleColor?:string
        webkitColumnRuleStyle?:string
        webkitColumnRuleWidth?:string
        webkitColumnSpan?:string
        webkitColumnWidth?:string
        webkitColumns?:string
        webkitFilter?:string
        webkitFlex?:string
        webkitFlexBasis?:string
        webkitFlexDirection?:string
        webkitFlexFlow?:string
        webkitFlexGrow?:string
        webkitFlexShrink?:string
        webkitFlexWrap?:string
        webkitFontFeatureSettings?:string
        webkitFontSmoothing?:string
        webkitHyphenateCharacter?:string
        webkitJustifyContent?:string
        webkitLineBreak?:string
        webkitLineClamp?:string
        webkitLocale?:string
        webkitLogicalHeight?:string
        webkitLogicalWidth?:string
        webkitMarginAfter?:string
        webkitMarginBefore?:string
        webkitMarginEnd?:string
        webkitMarginStart?:string
        webkitMask?:string
        webkitMaskBoxImage?:string
        webkitMaskBoxImageOutset?:string
        webkitMaskBoxImageRepeat?:string
        webkitMaskBoxImageSlice?:string
        webkitMaskBoxImageSource?:string
        webkitMaskBoxImageWidth?:string
        webkitMaskClip?:string
        webkitMaskComposite?:string
        webkitMaskImage?:string
        webkitMaskOrigin?:string
        webkitMaskPosition?:string
        webkitMaskPositionX?:string
        webkitMaskPositionY?:string
        webkitMaskRepeat?:string
        webkitMaskSize?:string
        webkitMaxLogicalHeight?:string
        webkitMaxLogicalWidth?:string
        webkitMinLogicalHeight?:string
        webkitMinLogicalWidth?:string
        webkitOpacity?:string
        webkitOrder?:string
        webkitPaddingAfter?:string
        webkitPaddingBefore?:string
        webkitPaddingEnd?:string
        webkitPaddingStart?:string
        webkitPerspective?:string
        webkitPerspectiveOrigin?:string
        webkitPerspectiveOriginX?:string
        webkitPerspectiveOriginY?:string
        webkitPrintColorAdjust?:string
        webkitRtlOrdering?:string
        webkitRubyPosition?:string
        webkitShapeImageThreshold?:string
        webkitShapeMargin?:string
        webkitShapeOutside?:string
        webkitTapHighlightColor?:string
        webkitTextCombine?:string
        webkitTextDecorationsInEffect?:string
        webkitTextEmphasis?:string
        webkitTextEmphasisColor?:string
        webkitTextEmphasisPosition?:string
        webkitTextEmphasisStyle?:string
        webkitTextFillColor?:string
        webkitTextOrientation?:string
        webkitTextSecurity?:string
        webkitTextSizeAdjust?:string
        webkitTextStroke?:string
        webkitTextStrokeColor?:string
        webkitTextStrokeWidth?:string
        webkitTransform?:string
        webkitTransformOrigin?:string
        webkitTransformOriginX?:string
        webkitTransformOriginY?:string
        webkitTransformOriginZ?:string
        webkitTransformStyle?:string
        webkitTransition?:string
        webkitTransitionDelay?:string
        webkitTransitionDuration?:string
        webkitTransitionProperty?:string
        webkitTransitionTimingFunction?:string
        webkitUserDrag?:string
        webkitUserModify?:string
        webkitUserSelect?:string
        webkitWritingMode?:string
        whiteSpace?:string
        whiteSpaceCollapse?:string
        widows?:string
        width?:string
        willChange?:string
        wordBreak?:string
        wordSpacing?:string
        wordWrap?:string
        writingMode?:string
        x?:string
        y?:string
        zIndex?:string
        zoom?:string
        epubCaptionSide?:string
        epubTextCombine?:string
        epubTextEmphasis?:string
        epubTextEmphasisColor?:string
        epubTextEmphasisStyle?:string
        epubTextOrientation?:string
        epubTextTransform?:string
        epubWordBreak?:string
        epubWritingMode?:string
        cssFloat?:string
        cssText?:string
}


export type styleKeys = "accentColor"|
        "additiveSymbols"|
        "alignContent"|
        "alignItems"|
        "alignSelf"|
        "alignmentBaseline"|
        "all"|
        "anchorName"|
        "anchorScope"|
        "animation"|
        "animationComposition"|
        "animationDelay"|
        "animationDirection"|
        "animationDuration"|
        "animationFillMode"|
        "animationIterationCount"|
        "animationName"|
        "animationPlayState"|
        "animationRange"|
        "animationRangeEnd"|
        "animationRangeStart"|
        "animationTimeline"|
        "animationTimingFunction"|
        "appRegion"|
        "appearance"|
        "ascentOverride"|
        "aspectRatio"|
        "backdropFilter"|
        "backfaceVisibility"|
        "background"|
        "backgroundAttachment"|
        "backgroundBlendMode"|
        "backgroundClip"|
        "backgroundColor"|
        "backgroundImage"|
        "backgroundOrigin"|
        "backgroundPosition"|
        "backgroundPositionX"|
        "backgroundPositionY"|
        "backgroundRepeat"|
        "backgroundSize"|
        "basePalette"|
        "baselineShift"|
        "baselineSource"|
        "blockSize"|
        "border"|
        "borderBlock"|
        "borderBlockColor"|
        "borderBlockEnd"|
        "borderBlockEndColor"|
        "borderBlockEndStyle"|
        "borderBlockEndWidth"|
        "borderBlockStart"|
        "borderBlockStartColor"|
        "borderBlockStartStyle"|
        "borderBlockStartWidth"|
        "borderBlockStyle"|
        "borderBlockWidth"|
        "borderBottom"|
        "borderBottomColor"|
        "borderBottomLeftRadius"|
        "borderBottomRightRadius"|
        "borderBottomStyle"|
        "borderBottomWidth"|
        "borderCollapse"|
        "borderColor"|
        "borderEndEndRadius"|
        "borderEndStartRadius"|
        "borderImage"|
        "borderImageOutset"|
        "borderImageRepeat"|
        "borderImageSlice"|
        "borderImageSource"|
        "borderImageWidth"|
        "borderInline"|
        "borderInlineColor"|
        "borderInlineEnd"|
        "borderInlineEndColor"|
        "borderInlineEndStyle"|
        "borderInlineEndWidth"|
        "borderInlineStart"|
        "borderInlineStartColor"|
        "borderInlineStartStyle"|
        "borderInlineStartWidth"|
        "borderInlineStyle"|
        "borderInlineWidth"|
        "borderLeft"|
        "borderLeftColor"|
        "borderLeftStyle"|
        "borderLeftWidth"|
        "borderRadius"|
        "borderRight"|
        "borderRightColor"|
        "borderRightStyle"|
        "borderRightWidth"|
        "borderSpacing"|
        "borderStartEndRadius"|
        "borderStartStartRadius"|
        "borderStyle"|
        "borderTop"|
        "borderTopColor"|
        "borderTopLeftRadius"|
        "borderTopRightRadius"|
        "borderTopStyle"|
        "borderTopWidth"|
        "borderWidth"|
        "bottom"|
        "boxDecorationBreak"|
        "boxShadow"|
        "boxSizing"|
        "breakAfter"|
        "breakBefore"|
        "breakInside"|
        "bufferedRendering"|
        "captionSide"|
        "caretColor"|
        "clear"|
        "clip"|
        "clipPath"|
        "clipRule"|
        "color"|
        "colorInterpolation"|
        "colorInterpolationFilters"|
        "colorRendering"|
        "colorScheme"|
        "columnCount"|
        "columnFill"|
        "columnGap"|
        "columnRule"|
        "columnRuleColor"|
        "columnRuleStyle"|
        "columnRuleWidth"|
        "columnSpan"|
        "columnWidth"|
        "columns"|
        "contain"|
        "containIntrinsicBlockSize"|
        "containIntrinsicHeight"|
        "containIntrinsicInlineSize"|
        "containIntrinsicSize"|
        "containIntrinsicWidth"|
        "container"|
        "containerName"|
        "containerType"|
        "content"|
        "contentVisibility"|
        "counterIncrement"|
        "counterReset"|
        "counterSet"|
        "cursor"|
        "cx"|
        "cy"|
        "d"|
        "descentOverride"|
        "direction"|
        "display"|
        "dominantBaseline"|
        "emptyCells"|
        "fallback"|
        "fieldSizing"|
        "fill"|
        "fillOpacity"|
        "fillRule"|
        "filter"|
        "flex"|
        "flexBasis"|
        "flexDirection"|
        "flexFlow"|
        "flexGrow"|
        "flexShrink"|
        "flexWrap"|
        "float"|
        "floodColor"|
        "floodOpacity"|
        "font"|
        "fontDisplay"|
        "fontFamily"|
        "fontFeatureSettings"|
        "fontKerning"|
        "fontOpticalSizing"|
        "fontPalette"|
        "fontSize"|
        "fontSizeAdjust"|
        "fontStretch"|
        "fontStyle"|
        "fontSynthesis"|
        "fontSynthesisSmallCaps"|
        "fontSynthesisStyle"|
        "fontSynthesisWeight"|
        "fontVariant"|
        "fontVariantAlternates"|
        "fontVariantCaps"|
        "fontVariantEastAsian"|
        "fontVariantEmoji"|
        "fontVariantLigatures"|
        "fontVariantNumeric"|
        "fontVariantPosition"|
        "fontVariationSettings"|
        "fontWeight"|
        "forcedColorAdjust"|
        "gap"|
        "grid"|
        "gridArea"|
        "gridAutoColumns"|
        "gridAutoFlow"|
        "gridAutoRows"|
        "gridColumn"|
        "gridColumnEnd"|
        "gridColumnGap"|
        "gridColumnStart"|
        "gridGap"|
        "gridRow"|
        "gridRowEnd"|
        "gridRowGap"|
        "gridRowStart"|
        "gridTemplate"|
        "gridTemplateAreas"|
        "gridTemplateColumns"|
        "gridTemplateRows"|
        "height"|
        "hyphenateCharacter"|
        "hyphenateLimitChars"|
        "hyphens"|
        "imageOrientation"|
        "imageRendering"|
        "inherits"|
        "initialLetter"|
        "initialValue"|
        "inlineSize"|
        "inset"|
        "insetBlock"|
        "insetBlockEnd"|
        "insetBlockStart"|
        "insetInline"|
        "insetInlineEnd"|
        "insetInlineStart"|
        "interpolateSize"|
        "isolation"|
        "justifyContent"|
        "justifyItems"|
        "justifySelf"|
        "left"|
        "letterSpacing"|
        "lightingColor"|
        "lineBreak"|
        "lineGapOverride"|
        "lineHeight"|
        "listStyle"|
        "listStyleImage"|
        "listStylePosition"|
        "listStyleType"|
        "margin"|
        "marginBlock"|
        "marginBlockEnd"|
        "marginBlockStart"|
        "marginBottom"|
        "marginInline"|
        "marginInlineEnd"|
        "marginInlineStart"|
        "marginLeft"|
        "marginRight"|
        "marginTop"|
        "marker"|
        "markerEnd"|
        "markerMid"|
        "markerStart"|
        "mask"|
        "maskClip"|
        "maskComposite"|
        "maskImage"|
        "maskMode"|
        "maskOrigin"|
        "maskPosition"|
        "maskRepeat"|
        "maskSize"|
        "maskType"|
        "mathDepth"|
        "mathShift"|
        "mathStyle"|
        "maxBlockSize"|
        "maxHeight"|
        "maxInlineSize"|
        "maxWidth"|
        "minBlockSize"|
        "minHeight"|
        "minInlineSize"|
        "minWidth"|
        "mixBlendMode"|
        "navigation"|
        "negative"|
        "objectFit"|
        "objectPosition"|
        "objectViewBox"|
        "offset"|
        "offsetAnchor"|
        "offsetDistance"|
        "offsetPath"|
        "offsetPosition"|
        "offsetRotate"|
        "opacity"|
        "order"|
        "orphans"|
        "outline"|
        "outlineColor"|
        "outlineOffset"|
        "outlineStyle"|
        "outlineWidth"|
        "overflow"|
        "overflowAnchor"|
        "overflowClipMargin"|
        "overflowWrap"|
        "overflowX"|
        "overflowY"|
        "overlay"|
        "overrideColors"|
        "overscrollBehavior"|
        "overscrollBehaviorBlock"|
        "overscrollBehaviorInline"|
        "overscrollBehaviorX"|
        "overscrollBehaviorY"|
        "pad"|
        "padding"|
        "paddingBlock"|
        "paddingBlockEnd"|
        "paddingBlockStart"|
        "paddingBottom"|
        "paddingInline"|
        "paddingInlineEnd"|
        "paddingInlineStart"|
        "paddingLeft"|
        "paddingRight"|
        "paddingTop"|
        "page"|
        "pageBreakAfter"|
        "pageBreakBefore"|
        "pageBreakInside"|
        "pageOrientation"|
        "paintOrder"|
        "perspective"|
        "perspectiveOrigin"|
        "placeContent"|
        "placeItems"|
        "placeSelf"|
        "pointerEvents"|
        "position"|
        "positionAnchor"|
        "positionArea"|
        "positionTry"|
        "positionTryFallbacks"|
        "positionTryOrder"|
        "positionVisibility"|
        "prefix"|
        "quotes"|
        "r"|
        "range"|
        "resize"|
        "right"|
        "rotate"|
        "rowGap"|
        "rubyAlign"|
        "rubyPosition"|
        "rx"|
        "ry"|
        "scale"|
        "scrollBehavior"|
        "scrollMargin"|
        "scrollMarginBlock"|
        "scrollMarginBlockEnd"|
        "scrollMarginBlockStart"|
        "scrollMarginBottom"|
        "scrollMarginInline"|
        "scrollMarginInlineEnd"|
        "scrollMarginInlineStart"|
        "scrollMarginLeft"|
        "scrollMarginRight"|
        "scrollMarginTop"|
        "scrollPadding"|
        "scrollPaddingBlock"|
        "scrollPaddingBlockEnd"|
        "scrollPaddingBlockStart"|
        "scrollPaddingBottom"|
        "scrollPaddingInline"|
        "scrollPaddingInlineEnd"|
        "scrollPaddingInlineStart"|
        "scrollPaddingLeft"|
        "scrollPaddingRight"|
        "scrollPaddingTop"|
        "scrollSnapAlign"|
        "scrollSnapStop"|
        "scrollSnapType"|
        "scrollTimeline"|
        "scrollTimelineAxis"|
        "scrollTimelineName"|
        "scrollbarColor"|
        "scrollbarGutter"|
        "scrollbarWidth"|
        "shapeImageThreshold"|
        "shapeMargin"|
        "shapeOutside"|
        "shapeRendering"|
        "size"|
        "sizeAdjust"|
        "speak"|
        "speakAs"|
        "src"|
        "stopColor"|
        "stopOpacity"|
        "stringoke"|
        "stringokeDasharray"|
        "stringokeDashoffset"|
        "stringokeLinecap"|
        "stringokeLinejoin"|
        "stringokeMiterlimit"|
        "stringokeOpacity"|
        "stringokeWidth"|
        "suffix"|
        "symbols"|
        "syntax"|
        "system"|
        "tabSize"|
        "tableLayout"|
        "textAlign"|
        "textAlignLast"|
        "textAnchor"|
        "textCombineUpright"|
        "textDecoration"|
        "textDecorationColor"|
        "textDecorationLine"|
        "textDecorationSkipInk"|
        "textDecorationStyle"|
        "textDecorationThickness"|
        "textEmphasis"|
        "textEmphasisColor"|
        "textEmphasisPosition"|
        "textEmphasisStyle"|
        "textIndent"|
        "textOrientation"|
        "textOverflow"|
        "textRendering"|
        "textShadow"|
        "textSizeAdjust"|
        "textSpacingTrim"|
        "textTransform"|
        "textUnderlineOffset"|
        "textUnderlinePosition"|
        "textWrap"|
        "textWrapMode"|
        "textWrapStyle"|
        "timelineScope"|
        "top"|
        "touchAction"|
        "transform"|
        "transformBox"|
        "transformOrigin"|
        "transformStyle"|
        "transition"|
        "transitionBehavior"|
        "transitionDelay"|
        "transitionDuration"|
        "transitionProperty"|
        "transitionTimingFunction"|
        "translate"|
        "types"|
        "unicodeBidi"|
        "unicodeRange"|
        "userSelect"|
        "vectorEffect"|
        "verticalAlign"|
        "viewTimeline"|
        "viewTimelineAxis"|
        "viewTimelineInset"|
        "viewTimelineName"|
        "viewTransitionClass"|
        "viewTransitionName"|
        "visibility"|
        "webkitAlignContent"|
        "webkitAlignItems"|
        "webkitAlignSelf"|
        "webkitAnimation"|
        "webkitAnimationDelay"|
        "webkitAnimationDirection"|
        "webkitAnimationDuration"|
        "webkitAnimationFillMode"|
        "webkitAnimationIterationCount"|
        "webkitAnimationName"|
        "webkitAnimationPlayState"|
        "webkitAnimationTimingFunction"|
        "webkitAppRegion"|
        "webkitAppearance"|
        "webkitBackfaceVisibility"|
        "webkitBackgroundClip"|
        "webkitBackgroundOrigin"|
        "webkitBackgroundSize"|
        "webkitBorderAfter"|
        "webkitBorderAfterColor"|
        "webkitBorderAfterStyle"|
        "webkitBorderAfterWidth"|
        "webkitBorderBefore"|
        "webkitBorderBeforeColor"|
        "webkitBorderBeforeStyle"|
        "webkitBorderBeforeWidth"|
        "webkitBorderBottomLeftRadius"|
        "webkitBorderBottomRightRadius"|
        "webkitBorderEnd"|
        "webkitBorderEndColor"|
        "webkitBorderEndStyle"|
        "webkitBorderEndWidth"|
        "webkitBorderHorizontalSpacing"|
        "webkitBorderImage"|
        "webkitBorderRadius"|
        "webkitBorderStart"|
        "webkitBorderStartColor"|
        "webkitBorderStartStyle"|
        "webkitBorderStartWidth"|
        "webkitBorderTopLeftRadius"|
        "webkitBorderTopRightRadius"|
        "webkitBorderVerticalSpacing"|
        "webkitBoxAlign"|
        "webkitBoxDecorationBreak"|
        "webkitBoxDirection"|
        "webkitBoxFlex"|
        "webkitBoxOrdinalGroup"|
        "webkitBoxOrient"|
        "webkitBoxPack"|
        "webkitBoxReflect"|
        "webkitBoxShadow"|
        "webkitBoxSizing"|
        "webkitClipPath"|
        "webkitColumnBreakAfter"|
        "webkitColumnBreakBefore"|
        "webkitColumnBreakInside"|
        "webkitColumnCount"|
        "webkitColumnGap"|
        "webkitColumnRule"|
        "webkitColumnRuleColor"|
        "webkitColumnRuleStyle"|
        "webkitColumnRuleWidth"|
        "webkitColumnSpan"|
        "webkitColumnWidth"|
        "webkitColumns"|
        "webkitFilter"|
        "webkitFlex"|
        "webkitFlexBasis"|
        "webkitFlexDirection"|
        "webkitFlexFlow"|
        "webkitFlexGrow"|
        "webkitFlexShrink"|
        "webkitFlexWrap"|
        "webkitFontFeatureSettings"|
        "webkitFontSmoothing"|
        "webkitHyphenateCharacter"|
        "webkitJustifyContent"|
        "webkitLineBreak"|
        "webkitLineClamp"|
        "webkitLocale"|
        "webkitLogicalHeight"|
        "webkitLogicalWidth"|
        "webkitMarginAfter"|
        "webkitMarginBefore"|
        "webkitMarginEnd"|
        "webkitMarginStart"|
        "webkitMask"|
        "webkitMaskBoxImage"|
        "webkitMaskBoxImageOutset"|
        "webkitMaskBoxImageRepeat"|
        "webkitMaskBoxImageSlice"|
        "webkitMaskBoxImageSource"|
        "webkitMaskBoxImageWidth"|
        "webkitMaskClip"|
        "webkitMaskComposite"|
        "webkitMaskImage"|
        "webkitMaskOrigin"|
        "webkitMaskPosition"|
        "webkitMaskPositionX"|
        "webkitMaskPositionY"|
        "webkitMaskRepeat"|
        "webkitMaskSize"|
        "webkitMaxLogicalHeight"|
        "webkitMaxLogicalWidth"|
        "webkitMinLogicalHeight"|
        "webkitMinLogicalWidth"|
        "webkitOpacity"|
        "webkitOrder"|
        "webkitPaddingAfter"|
        "webkitPaddingBefore"|
        "webkitPaddingEnd"|
        "webkitPaddingStart"|
        "webkitPerspective"|
        "webkitPerspectiveOrigin"|
        "webkitPerspectiveOriginX"|
        "webkitPerspectiveOriginY"|
        "webkitPrintColorAdjust"|
        "webkitRtlOrdering"|
        "webkitRubyPosition"|
        "webkitShapeImageThreshold"|
        "webkitShapeMargin"|
        "webkitShapeOutside"|
        "webkitTapHighlightColor"|
        "webkitTextCombine"|
        "webkitTextDecorationsInEffect"|
        "webkitTextEmphasis"|
        "webkitTextEmphasisColor"|
        "webkitTextEmphasisPosition"|
        "webkitTextEmphasisStyle"|
        "webkitTextFillColor"|
        "webkitTextOrientation"|
        "webkitTextSecurity"|
        "webkitTextSizeAdjust"|
        "webkitTextStroke"|
        "webkitTextStrokeColor"|
        "webkitTextStrokeWidth"|
        "webkitTransform"|
        "webkitTransformOrigin"|
        "webkitTransformOriginX"|
        "webkitTransformOriginY"|
        "webkitTransformOriginZ"|
        "webkitTransformStyle"|
        "webkitTransition"|
        "webkitTransitionDelay"|
        "webkitTransitionDuration"|
        "webkitTransitionProperty"|
        "webkitTransitionTimingFunction"|
        "webkitUserDrag"|
        "webkitUserModify"|
        "webkitUserSelect"|
        "webkitWritingMode"|
        "whiteSpace"|
        "whiteSpaceCollapse"|
        "widows"|
        "width"|
        "willChange"|
        "wordBreak"|
        "wordSpacing"|
        "wordWrap"|
        "writingMode"|
        "x"|
        "y"|
        "zIndex"|
        "zoom"|
        "epubCaptionSide"|
        "epubTextCombine"|
        "epubTextEmphasis"|
        "epubTextEmphasisColor"|
        "epubTextEmphasisStyle"|
        "epubTextOrientation"|
        "epubTextTransform"|
        "epubWordBreak"|
        "epubWritingMode"|
        "cssFloat"|
        "cssText"

export let GRID = "grid"
export let CENTER = "center"
export let FLEX = "flex"
export let BLOCK = "block"
export let FITCONTENT = "fit-content"

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
export {letters}

export function StyleToSheet(styles:dict<ICssHelper>){
    let sheet:string = ""
    for(let element in styles){
        sheet += `
        ${element}{
        `
        let style = styles[element] as dict
        for(let key in styles[element]){
            let keystyle = ""
            for (let letter of key){
                if (letters.toUpperCase().includes(letter)){
                    keystyle += `-${letter.toLowerCase()}`
                }else{
                    keystyle += letter
                }
            }
            sheet += `
            ${keystyle} : ${style[key]};`
        }
        sheet += `
        }`
    }
    return sheet
}

export function DocumentAddStyle(stylesDict:dict<ICssHelper>){
    let sheet = StyleToSheet(stylesDict)
    Clientable(()=>{
        let styleElement = document.getElementById("__DocumentAddStyle__")
        if (styleElement == null){
            styleElement = document.createElement("style")
            styleElement.id = "__DocumentAddStyle__"
            document.head.appendChild(styleElement)

        }
        if (styleElement.innerHTML.trim().includes(sheet.trim())){
           return
        }else{
            styleElement.innerHTML +=  sheet
        }
    })
}