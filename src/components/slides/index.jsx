import TitleSlide from './TitleSlide'
import StatementSlide from './StatementSlide'
import BigStatSlide from './BigStatSlide'
import CinematicSlide from './CinematicSlide'
import ToolOverviewSlide from './ToolOverviewSlide'
import QuoteSlide from './QuoteSlide'
import ComparisonSlide from './ComparisonSlide'
import IconBulletsSlide from './IconBulletsSlide'
import TakeawaySlide from './TakeawaySlide'
import IllustratedConceptSlide from './IllustratedConceptSlide'
import TierTransitionSlide from './TierTransitionSlide'
import ToolIntroSlide from './ToolIntroSlide'
import ToolContentSlide from './ToolContentSlide'
import ToolGettingStartedSlide from './ToolGettingStartedSlide'
import HabitCardsSlideComponent from './HabitCardsSlide'
import LevelUpTopicSlide from './LevelUpTopicSlide'
import CheatSheetSlide from './CheatSheetSlide'
import DecisionFlowSlide from './DecisionFlowSlide'
import ContestCtaSlide from './ContestCtaSlide'
import ToolCardsSlide from './ToolCardsSlide'

const layoutComponents = {
  title: TitleSlide,
  statement: StatementSlide,
  bigStat: BigStatSlide,
  cinematic: CinematicSlide,
  toolOverview: ToolOverviewSlide,
  quote: QuoteSlide,
  comparison: ComparisonSlide,
  iconBullets: IconBulletsSlide,
  takeaway: TakeawaySlide,
  illustratedConcept: IllustratedConceptSlide,
  tierTransition: TierTransitionSlide,
  toolIntro: ToolIntroSlide,
  toolContent: ToolContentSlide,
  toolGettingStarted: ToolGettingStartedSlide,
  habitCardsSlide: HabitCardsSlideComponent,
  levelUpTopic: LevelUpTopicSlide,
  cheatSheetMatrix: CheatSheetSlide,
  decisionFlowSlide: DecisionFlowSlide,
  contestCta: ContestCtaSlide,
  toolCards: ToolCardsSlide,
}

/**
 * Creates a renderer map for slide layouts.
 * Each renderer takes (slideData, options) and returns JSX.
 */
export function createSlideRenderers(fullscreen = false) {
  const renderers = {}
  for (const [layout, Component] of Object.entries(layoutComponents)) {
    renderers[layout] = (slideData, options = {}) => (
      <Component {...slideData} fullscreen={fullscreen} {...options} />
    )
  }
  return renderers
}
