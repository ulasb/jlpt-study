// AUTO-GENERATED listening scripts for N5. Assembled from verified
// fragments; regenerate rather than hand-editing. Audio: scripts/gen-audio.mjs.
import type { Listening } from '../types'

export const N5_LISTENING: Listening[] = [
  {
    "id": "listening:N5:apple-shop",
    "level": "N5",
    "title": "くだものの買[か]い物[もの]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません。このりんごは いくらですか。"
      },
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "一[ひと]つ 百円[ひゃくえん]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、三[みっ]つ ください。"
      },
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "はい、ぜんぶで 三百円[さんびゃくえん]です。"
      }
    ],
    "translation": "Woman: Excuse me. How much are these apples?\nShopkeeper (man): They are 100 yen each.\nWoman: Then three, please.\nShopkeeper (man): OK, that is 300 yen in total.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]は りんごを いくつ 買[か]いますか。",
        "questionTranslation": "How many apples does the woman buy?",
        "options": [
          {
            "text": "一つ",
            "explanation": "Wrong — 100 yen is the price of one apple, not how many she buys."
          },
          {
            "text": "二つ",
            "explanation": "Wrong — the number two is never mentioned."
          },
          {
            "text": "三つ",
            "explanation": "Correct — she says 三つください (three, please)."
          },
          {
            "text": "四つ",
            "explanation": "Wrong — the number four is never mentioned."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "りんごは ぜんぶで いくらですか。",
        "questionTranslation": "How much are the apples in total?",
        "options": [
          {
            "text": "百円",
            "explanation": "Wrong — 100 yen is the price of ONE apple."
          },
          {
            "text": "二百円",
            "explanation": "Wrong — this amount is never mentioned."
          },
          {
            "text": "三百円",
            "explanation": "Correct — the shopkeeper says ぜんぶで三百円です (300 yen in total)."
          },
          {
            "text": "四百円",
            "explanation": "Wrong — this amount is never mentioned."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:station-announcement",
    "level": "N5",
    "title": "駅[えき]のアナウンス",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "まもなく、三番線[さんばんせん]に 東京行[とうきょうゆ]きの 電車[でんしゃ]が きます。あぶないですから、黄色[きいろ]い 線[せん]の 内側[うちがわ]で お待[ま]ちください。"
      }
    ],
    "translation": "Announcement: The train bound for Tokyo will soon arrive at track 3. It is dangerous, so please wait inside the yellow line.",
    "questions": [
      {
        "question": "電車[でんしゃ]は どこに きますか。",
        "questionTranslation": "Where will the train arrive?",
        "options": [
          {
            "text": "一番線",
            "explanation": "Wrong — track 1 is never mentioned."
          },
          {
            "text": "二番線",
            "explanation": "Wrong — track 2 is never mentioned."
          },
          {
            "text": "三番線",
            "explanation": "Correct — the announcement says the train arrives at 三番線 (track 3)."
          },
          {
            "text": "四番線",
            "explanation": "Wrong — track 4 is never mentioned."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "人[ひと]は どこで 電車[でんしゃ]を 待[ま]ちますか。",
        "questionTranslation": "Where should people wait for the train?",
        "options": [
          {
            "text": "黄色い線の内側",
            "explanation": "Correct — the announcement says 黄色い線の内側でお待ちください (wait inside the yellow line)."
          },
          {
            "text": "黄色い線の外側",
            "explanation": "Wrong — outside the yellow line is the dangerous side; the announcement says the opposite."
          },
          {
            "text": "電車の中",
            "explanation": "Wrong — the train has not arrived yet, so no one can wait inside it."
          },
          {
            "text": "かいだんの下",
            "explanation": "Wrong — stairs are never mentioned."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:a-cafe-order",
    "level": "N5",
    "title": "きっさてんで",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、コーヒーを一[ひと]つください。"
      },
      {
        "speaker": "女[おんな]の店[みせ]の人[ひと]",
        "text": "はい。コーヒーは三百円[さんびゃくえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "サンドイッチもありますか。"
      },
      {
        "speaker": "女[おんな]の店[みせ]の人[ひと]",
        "text": "はい、あります。サンドイッチは四百円[よんひゃくえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃ、コーヒーとサンドイッチをください。"
      },
      {
        "speaker": "女[おんな]の店[みせ]の人[ひと]",
        "text": "ありがとうございます。全部[ぜんぶ]で七百円[ななひゃくえん]です。"
      }
    ],
    "translation": "Man: Excuse me, one coffee please.\nClerk (woman): Yes. Coffee is 300 yen.\nMan: Do you have sandwiches too?\nClerk (woman): Yes, we do. A sandwich is 400 yen.\nMan: Then I'll have a coffee and a sandwich.\nClerk (woman): Thank you. That comes to 700 yen in total.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]は何[なに]を買[か]いますか。",
        "questionTranslation": "What does the man buy?",
        "options": [
          {
            "text": "コーヒーだけ",
            "explanation": "He starts by ordering coffee, but he then adds a sandwich, so coffee alone is not his final order."
          },
          {
            "text": "サンドイッチだけ",
            "explanation": "He asks whether they have sandwiches, but he orders it together with coffee, not by itself."
          },
          {
            "text": "コーヒーとサンドイッチ",
            "explanation": "Correct. The man says コーヒーとサンドイッチをください (a coffee and a sandwich, please)."
          },
          {
            "text": "おちゃとサンドイッチ",
            "explanation": "Tea is never mentioned in the conversation; the drink he orders is coffee."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "全部[ぜんぶ]でいくらですか。",
        "questionTranslation": "How much is it in total?",
        "options": [
          {
            "text": "三百円",
            "explanation": "300 yen is the price of the coffee alone, not the total."
          },
          {
            "text": "七百円",
            "explanation": "Correct. The clerk says 全部で七百円です (it is 700 yen in total): 300 yen for coffee plus 400 yen for the sandwich."
          },
          {
            "text": "四百円",
            "explanation": "400 yen is the price of the sandwich alone, not the total."
          },
          {
            "text": "千円",
            "explanation": "1,000 yen is never mentioned; the total the clerk states is 700 yen."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:a-tshirt-size",
    "level": "N5",
    "title": "Tシャツを買[か]う",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、このTシャツのMサイズはありますか。"
      },
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "白[しろ]はSサイズだけです。青[あお]はMサイズがありますよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃ、青[あお]いのをください。いくらですか。"
      },
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "千五百円[せんごひゃくえん]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、お願[ねが]いします。"
      }
    ],
    "translation": "Woman: Excuse me, do you have this T-shirt in size M?\nClerk (man): The white one only comes in S. The blue one is available in M.\nWoman: Then I'll take the blue one. How much is it?\nClerk (man): It's 1,500 yen.\nWoman: OK, I'll take it.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はどのTシャツを買[か]いますか。",
        "questionTranslation": "Which T-shirt does the woman buy?",
        "options": [
          {
            "text": "青いMサイズ",
            "explanation": "Correct. The clerk says the blue one comes in M, and the woman answers 青いのをください (the blue one, please)."
          },
          {
            "text": "白いSサイズ",
            "explanation": "The white shirt only comes in S, but the woman wants size M, so she does not buy the white one."
          },
          {
            "text": "白いMサイズ",
            "explanation": "The clerk says the white one is available only in S, so a white M does not exist in the shop."
          },
          {
            "text": "青いSサイズ",
            "explanation": "The woman asked for size M, and the blue shirt she buys is an M, not an S."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "Tシャツはいくらですか。",
        "questionTranslation": "How much is the T-shirt?",
        "options": [
          {
            "text": "五百円",
            "explanation": "500 yen is not mentioned; the clerk states a higher price."
          },
          {
            "text": "千円",
            "explanation": "1,000 yen is not mentioned; the clerk states a different price."
          },
          {
            "text": "五千円",
            "explanation": "5,000 yen mixes up the digits; the clerk says a much lower price."
          },
          {
            "text": "千五百円",
            "explanation": "Correct. The clerk says 千五百円です (it is 1,500 yen)."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:a-movie-time",
    "level": "N5",
    "title": "映画[えいが]の時間[じかん]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "映画[えいが]は何時[なんじ]からですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "三時半[さんじはん]からですよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "今[いま]、何時[なんじ]ですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "二時[にじ]です。まだ時間[じかん]がありますね。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃ、まずきっさてんでお茶[ちゃ]を飲[の]みましょう。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。"
      }
    ],
    "translation": "Woman: What time does the movie start?\nMan: It starts at 3:30.\nWoman: What time is it now?\nMan: It's 2 o'clock. We still have time.\nWoman: Then let's have tea at a cafe first.\nMan: Sounds good.",
    "questions": [
      {
        "question": "映画[えいが]は何時[なんじ]からですか。",
        "questionTranslation": "What time does the movie start?",
        "options": [
          {
            "text": "三時",
            "explanation": "3:00 is close, but the man says the movie starts at half past three, not three."
          },
          {
            "text": "三時半",
            "explanation": "Correct. The man says 三時半からですよ (it starts at 3:30)."
          },
          {
            "text": "二時",
            "explanation": "2:00 is the current time, not the movie's start time."
          },
          {
            "text": "二時半",
            "explanation": "2:30 is never mentioned; the current time is 2:00 and the movie starts at 3:30."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "二人[ふたり]は映画[えいが]の前[まえ]に何[なに]をしますか。",
        "questionTranslation": "What will the two of them do before the movie?",
        "options": [
          {
            "text": "お茶を飲む",
            "explanation": "Correct. The woman suggests まずきっさてんでお茶を飲みましょう (let's have tea at a cafe first), and the man agrees."
          },
          {
            "text": "映画を見る",
            "explanation": "Watching the movie is what they will do afterward; the question asks what they do before it."
          },
          {
            "text": "ばんごはんを食べる",
            "explanation": "Eating dinner is never mentioned in the conversation."
          },
          {
            "text": "買い物をする",
            "explanation": "Shopping is never mentioned; the plan before the movie is to drink tea."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:a-library-where",
    "level": "N5",
    "title": "図書館[としょかん]はどこ",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、図書館[としょかん]はどこですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あの銀行[ぎんこう]のとなりですよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "銀行[ぎんこう]のとなりですね。ここからとおいですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいえ、歩[ある]いて五分[ごふん]ぐらいです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうですか。ありがとうございます。"
      }
    ],
    "translation": "Man: Excuse me, where is the library?\nWoman: It's next to that bank.\nMan: Next to the bank, right. Is it far from here?\nWoman: No, it's about five minutes on foot.\nMan: I see. Thank you very much.",
    "questions": [
      {
        "question": "図書館[としょかん]はどこにありますか。",
        "questionTranslation": "Where is the library?",
        "options": [
          {
            "text": "駅の前",
            "explanation": "A station is never mentioned in the conversation."
          },
          {
            "text": "学校のとなり",
            "explanation": "A school is never mentioned; the library is next to a different building."
          },
          {
            "text": "銀行の中",
            "explanation": "The library is next to the bank, not inside it."
          },
          {
            "text": "銀行のとなり",
            "explanation": "Correct. The woman says あの銀行のとなりですよ (it is next to that bank)."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "図書館[としょかん]まで歩[ある]いてどのぐらいかかりますか。",
        "questionTranslation": "About how long does it take to walk to the library?",
        "options": [
          {
            "text": "十五分",
            "explanation": "Fifteen minutes is not what the woman says; she gives a shorter time."
          },
          {
            "text": "五十分",
            "explanation": "Fifty minutes reverses the digits; the woman says a much shorter time."
          },
          {
            "text": "五分",
            "explanation": "Correct. The woman says 歩いて五分ぐらいです (about five minutes on foot)."
          },
          {
            "text": "十分",
            "explanation": "Ten minutes is not mentioned; the woman says about five minutes."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:a-homework-deadline",
    "level": "N5",
    "title": "宿題[しゅくだい]はいつまで",
    "script": [
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "先生[せんせい]、宿題[しゅくだい]はいつまでですか。"
      },
      {
        "speaker": "女[おんな]の先生[せんせい]",
        "text": "金曜日[きんようび]までですよ。"
      },
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "何[なん]ページですか。"
      },
      {
        "speaker": "女[おんな]の先生[せんせい]",
        "text": "二十[にじゅう]ページから二十二[にじゅうに]ページまでです。"
      },
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "わかりました。ありがとうございます。"
      }
    ],
    "translation": "Male student: Teacher, when is the homework due?\nFemale teacher: It's due Friday.\nMale student: Which pages?\nFemale teacher: From page 20 to page 22.\nMale student: I understand. Thank you.",
    "questions": [
      {
        "question": "宿題[しゅくだい]はいつまでですか。",
        "questionTranslation": "When is the homework due?",
        "options": [
          {
            "text": "金曜日",
            "explanation": "Correct. The teacher says 金曜日までですよ (it is due by Friday)."
          },
          {
            "text": "月曜日",
            "explanation": "Monday is never mentioned; the teacher says the deadline is Friday."
          },
          {
            "text": "水曜日",
            "explanation": "Wednesday is never mentioned; the teacher says the deadline is Friday."
          },
          {
            "text": "土曜日",
            "explanation": "Saturday is never mentioned; the teacher says the deadline is Friday."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "宿題[しゅくだい]はどこからどこまでですか。",
        "questionTranslation": "Which pages is the homework?",
        "options": [
          {
            "text": "12ページから22ページまで",
            "explanation": "The homework starts at page 20, not page 12."
          },
          {
            "text": "20ページから22ページまで",
            "explanation": "Correct. The teacher says 二十ページから二十二ページまでです (from page 20 to page 22)."
          },
          {
            "text": "20ページから25ページまで",
            "explanation": "The homework ends at page 22, not page 25."
          },
          {
            "text": "2ページから22ページまで",
            "explanation": "The homework starts at page 20, not page 2."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:a-test-day",
    "level": "N5",
    "title": "テストの日[ひ]",
    "script": [
      {
        "speaker": "女[おんな]の学生[がくせい]",
        "text": "先生[せんせい]、テストは何曜日[なんようび]ですか。"
      },
      {
        "speaker": "男[おとこ]の先生[せんせい]",
        "text": "木曜日[もくようび]ですよ。九時[くじ]から始[はじ]まります。"
      },
      {
        "speaker": "女[おんな]の学生[がくせい]",
        "text": "何[なに]を持[も]って来[き]ますか。"
      },
      {
        "speaker": "男[おとこ]の先生[せんせい]",
        "text": "えんぴつとけしゴムだけです。じしょは使[つか]わないでください。"
      },
      {
        "speaker": "女[おんな]の学生[がくせい]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Female student: Teacher, what day is the test?\nMale teacher: It's Thursday. It starts at 9 o'clock.\nFemale student: What should we bring?\nMale teacher: Only a pencil and an eraser. Please don't use a dictionary.\nFemale student: Yes, I understand.",
    "questions": [
      {
        "question": "テストはいつですか。",
        "questionTranslation": "When is the test?",
        "options": [
          {
            "text": "火曜日の9時",
            "explanation": "The day is wrong: the test is on Thursday, not Tuesday."
          },
          {
            "text": "木曜日の10時",
            "explanation": "The day is right, but the test starts at 9 o'clock, not 10."
          },
          {
            "text": "木曜日の9時",
            "explanation": "Correct. The teacher says 木曜日ですよ。九時から始まります (it is Thursday; it starts at 9 o'clock)."
          },
          {
            "text": "金曜日の9時",
            "explanation": "The time is right, but the test is on Thursday, not Friday."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "学生[がくせい]はテストに何[なに]を持[も]って行[い]きますか。",
        "questionTranslation": "What will the students take to the test?",
        "options": [
          {
            "text": "じしょとえんぴつ",
            "explanation": "The teacher explicitly says じしょは使わないでください (please don't use a dictionary), so a dictionary is not allowed."
          },
          {
            "text": "けしゴムだけ",
            "explanation": "An eraser alone is not enough; the teacher says to bring a pencil and an eraser."
          },
          {
            "text": "じしょだけ",
            "explanation": "A dictionary is exactly what the teacher tells them not to use."
          },
          {
            "text": "えんぴつとけしゴム",
            "explanation": "Correct. The teacher says えんぴつとけしゴムだけです (only a pencil and an eraser)."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:a-shopping-with-mother",
    "level": "N5",
    "title": "明日[あした]の買[か]い物[もの]",
    "script": [
      {
        "speaker": "男[おとこ]の子[こ]",
        "text": "お母[かあ]さん、明日[あした]どこかへ行[い]きますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "午前中[ごぜんちゅう]はスーパーへ行[い]きますよ。"
      },
      {
        "speaker": "男[おとこ]の子[こ]",
        "text": "ぼくも行[い]きたいです。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいですよ。午後[ごご]はおばあちゃんの家[いえ]へ行[い]きます。"
      },
      {
        "speaker": "男[おとこ]の子[こ]",
        "text": "じゃ、スーパーでケーキを買[か]いましょう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですね。おばあちゃんはケーキが好[す]きですから。"
      }
    ],
    "translation": "Boy: Mom, are we going anywhere tomorrow?\nWoman (mother): In the morning I'm going to the supermarket.\nBoy: I want to go too.\nWoman (mother): Sure. In the afternoon we're going to Grandma's house.\nBoy: Then let's buy a cake at the supermarket.\nWoman (mother): Good idea. Grandma likes cake.",
    "questions": [
      {
        "question": "二人[ふたり]は午前中[ごぜんちゅう]、どこへ行[い]きますか。",
        "questionTranslation": "Where will the two of them go in the morning?",
        "options": [
          {
            "text": "おばあちゃんの家",
            "explanation": "Grandma's house is the afternoon plan, not the morning one."
          },
          {
            "text": "スーパー",
            "explanation": "Correct. The mother says 午前中はスーパーへ行きますよ (in the morning I'm going to the supermarket), and the boy joins her."
          },
          {
            "text": "学校",
            "explanation": "School is never mentioned in the conversation."
          },
          {
            "text": "デパート",
            "explanation": "A department store is never mentioned; they go to the supermarket."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "二人[ふたり]は午後[ごご]、何[なに]をしますか。",
        "questionTranslation": "What will the two of them do in the afternoon?",
        "options": [
          {
            "text": "おばあちゃんの家へ行く",
            "explanation": "Correct. The mother says 午後はおばあちゃんの家へ行きます (in the afternoon we're going to Grandma's house)."
          },
          {
            "text": "スーパーへ行く",
            "explanation": "The supermarket is the morning plan, not the afternoon one."
          },
          {
            "text": "ケーキを作る",
            "explanation": "They plan to buy a cake at the supermarket, not make one."
          },
          {
            "text": "家でテレビを見る",
            "explanation": "Watching TV at home is never mentioned in the conversation."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:a-dinner-tonight",
    "level": "N5",
    "title": "今日[きょう]の晩[ばん]ご飯[はん]",
    "script": [
      {
        "speaker": "女[おんな]の子[こ]",
        "text": "お父[とう]さん、今日[きょう]の晩[ばん]ご飯[はん]は何[なん]ですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "カレーですよ。"
      },
      {
        "speaker": "女[おんな]の子[こ]",
        "text": "やった!何時[なんじ]に食[た]べますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "七時[しちじ]です。その前[まえ]におふろに入[はい]ってくださいね。"
      },
      {
        "speaker": "女[おんな]の子[こ]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Girl: Dad, what's for dinner today?\nMan (father): It's curry.\nGirl: Yay! What time are we eating?\nMan (father): At 7 o'clock. Please take a bath before then.\nGirl: OK, I will.",
    "questions": [
      {
        "question": "今日[きょう]の晩[ばん]ご飯[はん]は何[なん]ですか。",
        "questionTranslation": "What is for dinner today?",
        "options": [
          {
            "text": "すし",
            "explanation": "Sushi is never mentioned in the conversation."
          },
          {
            "text": "ラーメン",
            "explanation": "Ramen is never mentioned in the conversation."
          },
          {
            "text": "サラダ",
            "explanation": "Salad is never mentioned in the conversation."
          },
          {
            "text": "カレー",
            "explanation": "Correct. The father says カレーですよ (it's curry)."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "女[おんな]の子[こ]は晩[ばん]ご飯[はん]の前[まえ]に何[なに]をしますか。",
        "questionTranslation": "What will the girl do before dinner?",
        "options": [
          {
            "text": "宿題をする",
            "explanation": "Homework is never mentioned in the conversation."
          },
          {
            "text": "テレビを見る",
            "explanation": "Watching TV is never mentioned in the conversation."
          },
          {
            "text": "おふろに入る",
            "explanation": "Correct. The father says その前におふろに入ってくださいね (please take a bath before then), and the girl agrees."
          },
          {
            "text": "カレーを作る",
            "explanation": "The father is the one handling dinner; the girl is told to take a bath, not to cook."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:a-ramen-shop",
    "level": "N5",
    "title": "ラーメン屋[や]で",
    "script": [
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "いらっしゃいませ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ラーメンを一[ひと]つください。それから、ジュースもお願[ねが]いします。"
      },
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "ジュースは大[おお]きいのが二百円[にひゃくえん]、小[ちい]さいのが百円[ひゃくえん]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "小[ちい]さいのをください。"
      },
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "はい。ラーメンが五百円[ごひゃくえん]ですから、全部[ぜんぶ]で六百円[ろっぴゃくえん]です。"
      }
    ],
    "translation": "Clerk (man): Welcome!\nWoman: One ramen, please. And a juice as well.\nClerk (man): For juice, the large is 200 yen and the small is 100 yen.\nWoman: I'll have the small one.\nClerk (man): Certainly. The ramen is 500 yen, so it's 600 yen in total.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]は何[なに]を買[か]いますか。",
        "questionTranslation": "What does the woman buy?",
        "options": [
          {
            "text": "ラーメンと小さいジュース",
            "explanation": "Correct. She orders one ramen and then says 小さいのをください (the small one, please) about the juice."
          },
          {
            "text": "ラーメンと大きいジュース",
            "explanation": "She chooses the small juice, not the large one."
          },
          {
            "text": "ラーメンだけ",
            "explanation": "She also orders a juice, so ramen alone is not her full order."
          },
          {
            "text": "ジュースだけ",
            "explanation": "She orders a ramen first, so juice alone is not her full order."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "全部[ぜんぶ]でいくらですか。",
        "questionTranslation": "How much is it in total?",
        "options": [
          {
            "text": "五百円",
            "explanation": "500 yen is the price of the ramen alone, not the total."
          },
          {
            "text": "六百円",
            "explanation": "Correct. The clerk says 全部で六百円です (it is 600 yen in total): 500 yen for ramen plus 100 yen for the small juice."
          },
          {
            "text": "七百円",
            "explanation": "700 yen would be the total with the large juice, but she chose the small one."
          },
          {
            "text": "百円",
            "explanation": "100 yen is the price of the small juice alone, not the total."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:b-school-pool-closed",
    "level": "N5",
    "title": "学校[がっこう]のプールのお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "みなさん、こんにちは。明日[あした]、学校[がっこう]のプールは休[やす]みです。あさっては午前九時[ごぜんくじ]から使[つか]うことができます。"
      }
    ],
    "translation": "Announcement: Hello, everyone. Tomorrow, the school pool will be closed. The day after tomorrow, you can use it from 9 a.m.",
    "questions": [
      {
        "question": "プールはいつ休[やす]みですか。",
        "questionTranslation": "When is the pool closed?",
        "options": [
          {
            "text": "今日",
            "explanation": "The announcement is about tomorrow, not today. Nothing is said about the pool being closed today."
          },
          {
            "text": "明日",
            "explanation": "Correct. The announcement says 明日、学校のプールは休みです (tomorrow, the school pool is closed)."
          },
          {
            "text": "あさって",
            "explanation": "The day after tomorrow the pool reopens — the announcement says it can be used from 9 a.m. that day."
          },
          {
            "text": "日曜日",
            "explanation": "Sunday is never mentioned in the announcement; the pool is closed tomorrow."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "あさって、プールは何時[なんじ]からですか。",
        "questionTranslation": "From what time can the pool be used the day after tomorrow?",
        "options": [
          {
            "text": "午前八時から",
            "explanation": "Eight o'clock is not mentioned; the announcement gives 9 a.m. as the opening time."
          },
          {
            "text": "午前十時から",
            "explanation": "Ten o'clock is not mentioned; the announcement gives 9 a.m. as the opening time."
          },
          {
            "text": "午前九時から",
            "explanation": "Correct. The announcement says あさっては午前九時から使うことができます (the day after tomorrow it can be used from 9 a.m.)."
          },
          {
            "text": "午後九時から",
            "explanation": "The announcement says 午前九時 (9 a.m.), not 9 p.m."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:b-supermarket-apple-sale",
    "level": "N5",
    "title": "スーパーのお知[し]らせ",
    "script": [
      {
        "speaker": "店[みせ]の人[ひと]",
        "text": "いらっしゃいませ。今日[きょう]、りんごは三[みっ]つで二百円[にひゃくえん]です。りんごの売[う]り場[ば]は二階[にかい]です。"
      }
    ],
    "translation": "Store clerk: Welcome! Today, apples are three for 200 yen. The apple section is on the second floor.",
    "questions": [
      {
        "question": "りんごは三[みっ]つでいくらですか。",
        "questionTranslation": "How much are three apples?",
        "options": [
          {
            "text": "百円",
            "explanation": "The announcement says 200 yen for three apples, not 100 yen."
          },
          {
            "text": "三百円",
            "explanation": "The announcement says 200 yen for three apples; 300 is the number of yen mixed up with the number of apples (three)."
          },
          {
            "text": "五百円",
            "explanation": "500 yen is never mentioned in the announcement."
          },
          {
            "text": "二百円",
            "explanation": "Correct. The clerk says 三つで二百円です (three for 200 yen)."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "りんごの売[う]り場[ば]はどこですか。",
        "questionTranslation": "Where is the apple section?",
        "options": [
          {
            "text": "一階です",
            "explanation": "The first floor is not mentioned; the clerk says the apple section is on the second floor."
          },
          {
            "text": "二階です",
            "explanation": "Correct. The clerk says りんごの売り場は二階です (the apple section is on the second floor)."
          },
          {
            "text": "三階です",
            "explanation": "The third floor is not mentioned; the apple section is on the second floor."
          },
          {
            "text": "四階です",
            "explanation": "The fourth floor is not mentioned; the apple section is on the second floor."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:b-sports-day-postponed",
    "level": "N5",
    "title": "うんどうかいのお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "みなさん、おはようございます。今日[きょう]のうんどうかいは、雨[あめ]ですから、ありません。来週[らいしゅう]の土曜日[どようび]にします。"
      }
    ],
    "translation": "Announcement: Good morning, everyone. Today's sports day is cancelled because of rain. It will be held next Saturday instead.",
    "questions": [
      {
        "question": "今日[きょう]、どうしてうんどうかいがありませんか。",
        "questionTranslation": "Why is there no sports day today?",
        "options": [
          {
            "text": "雨が降るから",
            "explanation": "Correct. The announcement says 雨ですから、ありません (because it is raining, it will not be held)."
          },
          {
            "text": "雪が降るから",
            "explanation": "Snow is never mentioned; the reason given is rain."
          },
          {
            "text": "寒いから",
            "explanation": "Cold weather is never mentioned; the reason given is rain."
          },
          {
            "text": "先生が休みだから",
            "explanation": "Nothing is said about a teacher being absent; the reason given is rain."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "うんどうかいはいつになりましたか。",
        "questionTranslation": "When will the sports day be held instead?",
        "options": [
          {
            "text": "今日の午後",
            "explanation": "Sports day is cancelled for today entirely; it is moved to next Saturday, not this afternoon."
          },
          {
            "text": "明日",
            "explanation": "Tomorrow is never mentioned; the announcement says it will be next Saturday."
          },
          {
            "text": "来週の土曜日",
            "explanation": "Correct. The announcement says 来週の土曜日にします (it will be held next Saturday)."
          },
          {
            "text": "来週の日曜日",
            "explanation": "The announcement says next Saturday (土曜日), not Sunday (日曜日)."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:b-movie-phone-message",
    "level": "N5",
    "title": "友[とも]だちからのでんわ",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "もしもし、田中[たなか]さん。山田[やまだ]です。明日[あした]の映画[えいが]は三時[さんじ]からですよ。二時半[にじはん]に映画館[えいがかん]の前[まえ]で会[あ]いましょう。"
      }
    ],
    "translation": "Woman: Hello, Tanaka-san. This is Yamada. Tomorrow's movie starts at three o'clock. Let's meet in front of the movie theater at two thirty.",
    "questions": [
      {
        "question": "映画[えいが]は何時[なんじ]からですか。",
        "questionTranslation": "What time does the movie start?",
        "options": [
          {
            "text": "二時",
            "explanation": "Two o'clock is not mentioned; the movie starts at three, and the meeting time is two thirty."
          },
          {
            "text": "二時半",
            "explanation": "Two thirty is the time they will meet in front of the theater, not the time the movie starts."
          },
          {
            "text": "三時",
            "explanation": "Correct. The message says 映画は三時からですよ (the movie starts at three o'clock)."
          },
          {
            "text": "三時半",
            "explanation": "Three thirty is not mentioned; the movie starts at three o'clock."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "二人[ふたり]はどこで会[あ]いますか。",
        "questionTranslation": "Where will the two of them meet?",
        "options": [
          {
            "text": "駅の前",
            "explanation": "A station is never mentioned; they will meet in front of the movie theater."
          },
          {
            "text": "学校の前",
            "explanation": "A school is never mentioned; they will meet in front of the movie theater."
          },
          {
            "text": "田中さんの家",
            "explanation": "Tanaka-san's house is never mentioned as the meeting place; they will meet in front of the movie theater."
          },
          {
            "text": "映画館の前",
            "explanation": "Correct. The message says 映画館の前で会いましょう (let's meet in front of the movie theater)."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:b-sunday-park-plans",
    "level": "N5",
    "title": "日曜日[にちようび]のやくそく",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "もしもし、ゆきさんですか。けんです。日曜日[にちようび]、いっしょに公園[こうえん]へ行[い]きませんか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいですね。何時[なんじ]がいいですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "午前十時[ごぜんじゅうじ]はどうですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、午前[ごぜん]はちょっと…。午後一時[ごごいちじ]はどうですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですよ。じゃあ、公園[こうえん]の入[い]り口[ぐち]で会[あ]いましょう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Man: Hello, is this Yuki? It's Ken. Won't you go to the park with me on Sunday?\nWoman: That sounds nice. What time is good?\nMan: How about 10 a.m.?\nWoman: Sorry, the morning is a bit difficult... How about 1 p.m.?\nMan: That's fine. Then let's meet at the park entrance.\nWoman: Okay, understood.",
    "questions": [
      {
        "question": "二人[ふたり]は何時[なんじ]に会[あ]いますか。",
        "questionTranslation": "What time will the two of them meet?",
        "options": [
          {
            "text": "午前十時",
            "explanation": "The man suggests 10 a.m., but the woman says 午前はちょっと… (the morning is a bit difficult), so they do not meet then."
          },
          {
            "text": "午前十一時",
            "explanation": "Eleven o'clock is never mentioned in the conversation."
          },
          {
            "text": "午後二時",
            "explanation": "Two p.m. is never mentioned; the woman proposes 1 p.m. and the man agrees."
          },
          {
            "text": "午後一時",
            "explanation": "Correct. The woman suggests 午後一時はどうですか (how about 1 p.m.?) and the man answers いいですよ (that's fine)."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "二人[ふたり]はどこで会[あ]いますか。",
        "questionTranslation": "Where will the two of them meet?",
        "options": [
          {
            "text": "公園の入り口",
            "explanation": "Correct. The man says 公園の入り口で会いましょう (let's meet at the park entrance)."
          },
          {
            "text": "駅の前",
            "explanation": "A station is never mentioned; they will meet at the park entrance."
          },
          {
            "text": "公園の中",
            "explanation": "They will meet at the entrance of the park, not inside the park."
          },
          {
            "text": "映画館の前",
            "explanation": "A movie theater is never mentioned; they will meet at the park entrance."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:b-birthday-party-call",
    "level": "N5",
    "title": "たんじょうびパーティーのでんわ",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "もしもし、たかしさん?あきこです。土曜日[どようび]、わたしのたんじょうびパーティーに来[き]ませんか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。何時[なんじ]からですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "午後六時[ごごろくじ]からです。わたしの家[いえ]でします。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかりました。何[なに]か持[も]って行[い]きましょうか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、飲[の]み物[もの]をおねがいします。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Woman: Hello, Takashi? It's Akiko. Won't you come to my birthday party on Saturday?\nMan: Sounds great. What time does it start?\nWoman: It starts at 6 p.m. It will be at my house.\nMan: Got it. Shall I bring something?\nWoman: Then please bring drinks.\nMan: Okay, understood.",
    "questions": [
      {
        "question": "パーティーは何時[なんじ]からですか。",
        "questionTranslation": "What time does the party start?",
        "options": [
          {
            "text": "午後五時",
            "explanation": "Five o'clock is never mentioned; the party starts at 6 p.m."
          },
          {
            "text": "午後六時",
            "explanation": "Correct. The woman says 午後六時からです (it starts at 6 p.m.)."
          },
          {
            "text": "午後七時",
            "explanation": "Seven o'clock is never mentioned; the party starts at 6 p.m."
          },
          {
            "text": "午前六時",
            "explanation": "The party is at 6 in the evening (午後), not 6 in the morning (午前)."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "男[おとこ]の人[ひと]は何[なに]を持[も]って行[い]きますか。",
        "questionTranslation": "What will the man bring?",
        "options": [
          {
            "text": "食べ物",
            "explanation": "Food is not requested; the woman asks for drinks."
          },
          {
            "text": "ケーキ",
            "explanation": "A cake is never mentioned in the conversation; the woman asks for drinks."
          },
          {
            "text": "花",
            "explanation": "Flowers are never mentioned in the conversation; the woman asks for drinks."
          },
          {
            "text": "飲み物",
            "explanation": "Correct. The woman says 飲み物をおねがいします (please bring drinks) and the man agrees."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:b-post-office-directions",
    "level": "N5",
    "title": "ゆうびんきょくはどこですか",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません。この近[ちか]くにゆうびんきょくはありますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、ありますよ。この道[みち]をまっすぐ行[い]ってください。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "二[ふた]つ目[め]のかどを右[みぎ]にまがってください。ゆうびんきょくは銀行[ぎんこう]のとなりにあります。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "二[ふた]つ目[め]のかどを右[みぎ]ですね。ありがとうございます。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいえ、どういたしまして。"
      }
    ],
    "translation": "Man: Excuse me. Is there a post office near here?\nWoman: Yes, there is. Please go straight down this street.\nMan: Okay.\nWoman: Turn right at the second corner. The post office is next to the bank.\nMan: Right at the second corner, got it. Thank you.\nWoman: Not at all, you're welcome.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]はどこへ行[い]きたいですか。",
        "questionTranslation": "Where does the man want to go?",
        "options": [
          {
            "text": "ゆうびんきょく",
            "explanation": "Correct. The man asks この近くにゆうびんきょくはありますか (is there a post office near here?)."
          },
          {
            "text": "銀行",
            "explanation": "The bank is only mentioned as a landmark — the post office is next to it. The man is looking for the post office."
          },
          {
            "text": "スーパー",
            "explanation": "A supermarket is never mentioned in the conversation."
          },
          {
            "text": "学校",
            "explanation": "A school is never mentioned in the conversation."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "男[おとこ]の人[ひと]はどこをまがりますか。",
        "questionTranslation": "Where should the man turn?",
        "options": [
          {
            "text": "一つ目のかどを右",
            "explanation": "The woman says the second corner, not the first."
          },
          {
            "text": "二つ目のかどを右",
            "explanation": "Correct. The woman says 二つ目のかどを右にまがってください (please turn right at the second corner)."
          },
          {
            "text": "二つ目のかどを左",
            "explanation": "The corner is correct, but the direction is wrong — the woman says to turn right, not left."
          },
          {
            "text": "一つ目のかどを左",
            "explanation": "Both the corner and the direction are wrong — the woman says to turn right at the second corner."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:b-flower-shop-directions",
    "level": "N5",
    "title": "花[はな]やへの道[みち]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、この近[ちか]くに花[はな]やはありますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい。あの白[しろ]いビルの中[なか]にありますよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あの高[たか]いビルですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいえ、高[たか]いビルじゃありません。レストランの前[まえ]の白[しろ]いビルです。花[はな]やは二階[にかい]にあります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかりました。ありがとうございます。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "どういたしまして。"
      }
    ],
    "translation": "Woman: Excuse me, is there a flower shop near here?\nMan: Yes. It's inside that white building.\nWoman: That tall building?\nMan: No, not the tall building. It's the white building in front of the restaurant. The flower shop is on the second floor.\nWoman: I see. Thank you very much.\nMan: You're welcome.",
    "questions": [
      {
        "question": "花[はな]やはどこにありますか。",
        "questionTranslation": "Where is the flower shop?",
        "options": [
          {
            "text": "高いビルの中",
            "explanation": "The man explicitly says 高いビルじゃありません (it's not the tall building)."
          },
          {
            "text": "レストランの二階",
            "explanation": "The flower shop is in the white building, not inside the restaurant. The restaurant is only a landmark."
          },
          {
            "text": "銀行のとなり",
            "explanation": "A bank is never mentioned in this conversation."
          },
          {
            "text": "白いビルの二階",
            "explanation": "Correct. The man says the shop is in the white building and 花やは二階にあります (the flower shop is on the second floor)."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "白[しろ]いビルはどこにありますか。",
        "questionTranslation": "Where is the white building?",
        "options": [
          {
            "text": "レストランの前",
            "explanation": "Correct. The man says レストランの前の白いビルです (it's the white building in front of the restaurant)."
          },
          {
            "text": "レストランのとなり",
            "explanation": "The man says the building is in front of (前) the restaurant, not next to (となり) it."
          },
          {
            "text": "銀行の前",
            "explanation": "A bank is never mentioned; the building is in front of the restaurant."
          },
          {
            "text": "学校のうしろ",
            "explanation": "A school is never mentioned; the building is in front of the restaurant."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:b-tennis-weather-plans",
    "level": "N5",
    "title": "明日[あした]の天気[てんき]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "明日[あした]、いっしょにテニスをしませんか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。でも、明日[あした]の午後[ごご]は雨[あめ]ですよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですか。じゃあ、午前中[ごぜんちゅう]にしましょう。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですよ。午前九時[ごぜんくじ]に公園[こうえん]で会[あ]いましょう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、そうしましょう。"
      }
    ],
    "translation": "Woman: Won't you play tennis with me tomorrow?\nMan: Sounds nice. But it's going to rain tomorrow afternoon.\nWoman: Is that so? Then let's do it in the morning.\nMan: Sure. Let's meet at the park at 9 a.m.\nWoman: Yes, let's do that.",
    "questions": [
      {
        "question": "明日[あした]の午後[ごご]の天気[てんき]はどうですか。",
        "questionTranslation": "What will the weather be like tomorrow afternoon?",
        "options": [
          {
            "text": "晴れ",
            "explanation": "Sunny weather is not mentioned; the man says it will rain tomorrow afternoon."
          },
          {
            "text": "くもり",
            "explanation": "Cloudy weather is not mentioned; the man says it will rain tomorrow afternoon."
          },
          {
            "text": "雨",
            "explanation": "Correct. The man says 明日の午後は雨ですよ (it's going to rain tomorrow afternoon)."
          },
          {
            "text": "雪",
            "explanation": "Snow is not mentioned; the man says it will rain tomorrow afternoon."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "二人[ふたり]はいつテニスをしますか。",
        "questionTranslation": "When will the two of them play tennis?",
        "options": [
          {
            "text": "今日の午後",
            "explanation": "They are talking about tomorrow, not today."
          },
          {
            "text": "明日の午前九時",
            "explanation": "Correct. Because of the afternoon rain they choose the morning, and the man says 午前九時に公園で会いましょう (let's meet at the park at 9 a.m.)."
          },
          {
            "text": "明日の午後",
            "explanation": "They avoid tomorrow afternoon because it will rain then."
          },
          {
            "text": "明日の午前十時",
            "explanation": "They agree to meet at 9 a.m., not 10 a.m."
          }
        ],
        "correctIndex": 1
      }
    ]
  }
]
