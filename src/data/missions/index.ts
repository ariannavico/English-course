import type { Mission } from "@/features/missions/types";
import { missedFlight } from "./flight";
import { restaurantProblem } from "./restaurant";
import { jobInterview } from "./jobInterview";

/** Registry of missions. Add a mission file and list it here — nothing else changes. */
export const missions: Mission[] = [restaurantProblem, missedFlight, jobInterview];

const byId = new Map(missions.map((m) => [m.id, m]));
export const getMission = (id: string): Mission | undefined => byId.get(id);
