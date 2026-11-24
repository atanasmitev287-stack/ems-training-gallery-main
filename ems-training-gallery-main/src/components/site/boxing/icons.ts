import { Activity, BicepsFlexed, Brain, Flame, HandFist, HeartPulse, Shield, Target, Timer } from "lucide-react";
import type { BoxingIcon } from "@/lib/site";

export const boxingIcons: Record<BoxingIcon, typeof Activity> = {
  fist: HandFist,
  target: Target,
  shield: Shield,
  flame: Flame,
  heart: HeartPulse,
  brain: Brain,
  timer: Timer,
  biceps: BicepsFlexed,
};
