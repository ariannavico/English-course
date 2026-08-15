import { describe, expect, it } from "vitest";
import { stories, getStory, getEpisode } from "@/data/story";

describe("story data integrity", () => {
  it("episodes are numbered sequentially from 1 and ids are unique", () => {
    const allIds: string[] = [];
    for (const story of stories) {
      story.episodes.forEach((e, i) => {
        expect(e.number, `${story.id} ep index ${i}`).toBe(i + 1);
        allIds.push(e.id);
      });
    }
    expect(new Set(allIds).size).toBe(allIds.length);
  });

  it("every beat is well-formed for its kind", () => {
    for (const story of stories) {
      for (const e of story.episodes) {
        expect(e.beats.length, e.id).toBeGreaterThan(0);
        for (const b of e.beats) {
          if (b.kind === "brief") expect(b.text.length, b.id).toBeGreaterThan(0);
          if (b.kind === "choice") {
            expect(b.options.length, b.id).toBeGreaterThanOrEqual(2);
            for (const o of b.options) expect(o.feedback.length, `${b.id}/${o.id}`).toBeGreaterThan(0);
          }
          if (b.kind === "produce") {
            expect(b.prompt.length, b.id).toBeGreaterThan(0);
            expect(b.modelAnswer, b.id).toBeTruthy();
          }
        }
      }
    }
  });

  it("lookups resolve", () => {
    const story = stories[0];
    expect(getStory(story.id)?.title).toBe(story.title);
    const first = story.episodes[0];
    expect(getEpisode(first.id)?.episode.title).toBe(first.title);
    expect(getEpisode("nope")).toBeUndefined();
  });
});
