import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-akane-uniform",
  slug: "akane-uniform",
  title: "Akane (Uniform)",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 12.666666984558105,
    "lines": [
      {
        "id": "ch0307_memoriallobby_1_1",
        "text": {
          "zh-cn": "",
          "ja": "ふふっ。",
          "ko": "후후.",
          "en": "Fufu."
        }
      },
      {
        "id": "ch0307_memoriallobby_1_2",
        "text": {
          "zh-cn": "",
          "ja": "思っていたより……\n気恥ずかしいものですね。",
          "ko": "생각했던 것보다……\n부끄러운 일이네요.",
          "en": "This situation is a bit more embarrasing than I thought it'd be."
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 14.666666984558105,
    "lines": [
      {
        "id": "ch0307_memoriallobby_2_1",
        "text": {
          "zh-cn": "",
          "ja": "自分に対して、\n素直になる……。",
          "ko": "자신에게,\n솔직해진다는 것……",
          "en": "Being honest with oneself..."
        }
      },
      {
        "id": "ch0307_memoriallobby_2_2",
        "text": {
          "zh-cn": "",
          "ja": "どうにも\n慣れない感覚です。",
          "ko": "도저히 익숙해지지\n않는 느낌이에요.",
          "en": "I simply can't seem to get used to it."
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 15.333333969116211,
    "lines": [
      {
        "id": "ch0307_memoriallobby_3_1",
        "text": {
          "zh-cn": "",
          "ja": "ええ、仰る通りです。",
          "ko": "네.\n말씀하신 대로에요.",
          "en": "Yes. Exactly as you say."
        }
      },
      {
        "id": "ch0307_memoriallobby_3_2",
        "text": {
          "zh-cn": "",
          "ja": "私にとって、必要な\nことだったのだと\n思います。",
          "ko": "저에게는, 정말로\n필요한 일이었나 봐요.",
          "en": "But to me... It'd seem it was something I really needed."
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 27.000001907348633,
    "lines": [
      {
        "id": "ch0307_memoriallobby_4_1",
        "text": {
          "zh-cn": "",
          "ja": "先生には色々とご迷惑を\nおかけしてしまいました。",
          "ko": "여러모로 실례가\n많았습니다. 선생님.",
          "en": "In more ways than one, I'm in your debt, Sensei."
        }
      },
      {
        "id": "ch0307_memoriallobby_4_2",
        "text": {
          "zh-cn": "",
          "ja": "それでも、先生と\n出会えた私はやはり――",
          "ko": "그렇지만 저는 역시,\n선생님을 만나서 정말로",
          "en": "Despite everything, I think meeting you was..."
        }
      },
      {
        "id": "ch0307_memoriallobby_4_3",
        "text": {
          "zh-cn": "",
          "ja": "ええ、本当に幸運だったと\n思っています。",
          "ko": "네. 행운이었다고\n생각해요.",
          "en": "It was truly a great stroke of luck."
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 20.33333396911621,
    "lines": [
      {
        "id": "ch0307_memoriallobby_5_1",
        "text": {
          "zh-cn": "",
          "ja": "すべては流れ、\nいずれ忘れられて\nいくのでしょう。",
          "ko": "모든 것은 흘러가고,\n어떤 것은 잊히겠죠.",
          "en": "Life continues moving ever forward, and some things will be forgotten along the way."
        }
      },
      {
        "id": "ch0307_memoriallobby_5_2",
        "text": {
          "zh-cn": "",
          "ja": "今この瞬間でさえ、\nいつかは……。",
          "ko": "지금 여기에서\n있었던 일도, 어쩌면…….",
          "en": "What happened right now will also, perhaps..."
        }
      }
    ]
  },
  {
    "index": 6,
    "motionAnimation": "Talk_06_M",
    "attachmentAnimation": "Talk_06_A",
    "duration": 24.166667938232422,
    "lines": [
      {
        "id": "ch0307_memoriallobby_6_1",
        "text": {
          "zh-cn": "",
          "ja": "ですが、私は\n覚えています。",
          "ko": "하지만, 저는 기억하겠어요.",
          "en": "But I will remember."
        }
      },
      {
        "id": "ch0307_memoriallobby_6_2",
        "text": {
          "zh-cn": "",
          "ja": "たとえ先生が\n忘れてしまったとしても。",
          "ko": "만에 하나 선생님께서\n잊으신다고 해도.",
          "en": "Even if you forget, Sensei."
        }
      },
      {
        "id": "ch0307_memoriallobby_6_3",
        "text": {
          "zh-cn": "",
          "ja": "本当に大切なものは、\n決して失われませんから。",
          "ko": "정말로 소중한 것들은,\n사라지지 않을 테니까요.",
          "en": "The really precious memories... They never truly disappear."
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
