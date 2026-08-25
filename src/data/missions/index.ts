import type { Mission } from "@/features/missions/types";
import { missedFlight } from "./flight";
import { restaurantProblem } from "./restaurant";
import { jobInterview } from "./jobInterview";
import { pharmacyVisit } from "./pharmacy";
import { deliveryComplaint } from "./delivery";
import { bankCard } from "./bankCard";
import { productReturn } from "./productReturn";

/** Registry of missions. Add a mission file and list it here — nothing else changes. */
export const missions: Mission[] = [
  restaurantProblem,
  missedFlight,
  jobInterview,
  pharmacyVisit,
  deliveryComplaint,
  bankCard,
  productReturn,
];

const byId = new Map(missions.map((m) => [m.id, m]));
export const getMission = (id: string): Mission | undefined => byId.get(id);
